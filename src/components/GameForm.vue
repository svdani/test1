<template>
    <form v-on:submit.prevent>
      <div class="input-group">
        <div class="bubble-box">Game Name:</div>
        <input type="text" id="playerHP" v-model="gameName">
      </div>
      <div class="input-group">
        <div class="bubble-box">Board Size:</div>
        <input class="form-control" type="number" id="rows" v-model="boardSize" @input="changeBoardSize">
      </div>
      <div class="input-group">
        <div class="bubble-box">MAX HP:</div>
        <input class="form-control" type="number" id="playerHP" v-model="playerHP">
      </div>
      <button type="button" class="button" v-on:click="startGame">Start Game</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';
  
  export default {
    name: 'GameForm',
    data() {
      return {
        size: 0,
        HP_max: 0,
        game_ID: ''
      };
    },
    methods: {
    
    changeBoardSize() {
        this.$emit('change-board', { boardSize: this.boardSize, playerHP: this.playerHP });
    },
    async getCurrentGame () {
      const urlCurrentGame = 'https://balandrau.salle.url.edu/i3/players/arenas/current';
      const token = localStorage.getItem("token");
        
        const config = {
          headers: { 'Content-Type': 'application/json', 'Bearer': token, 'Authorization': `Bearer ${token}`}
        };
      try {
        const response = await axios.get(urlCurrentGame, config);
        return response.data;
      } catch (error) {
        console.error('Error en la solicitud GET:', error);
        throw error;
      }
    },startGame() {
      const apiUrl = 'https://balandrau.salle.url.edu/i3/arenas';
      const token = localStorage.getItem("token");

      const config = {
        headers: { 'Content-Type': 'application/json', 'Bearer': token, 'Authorization': `Bearer ${token}`}
      };
      const gameInfo = {
        game_ID: this.gameName,
        size: this.boardSize,
        HP_max: this.playerHP
      };

      axios.post(apiUrl, gameInfo, config)
        .then(async response => {
          console.log('Response:', response.data);
          router.push({ 
            name: 'game', 
            query: {
              gameName: this.gameName,
              boardSize: this.boardSize,
              playerHP: this.playerHP
            }
          });
        })
        .catch(async error => {
          if (error.response && error.response.status === 403) {
            console.log('Error 403: Ya estás en un juego');
            let currentGame = await this.getCurrentGame();
            if (currentGame.HP_max > 0) {
              this.deleteCurrentGame(currentGame.game_ID);
            }
            router.push({ 
              name: 'game', 
              query: {
                gameName: this.gameName,
                boardSize: this.boardSize,
                playerHP: this.playerHP
              }
            });
          } else {
            console.error('Error:', error);

          }
        });
    },
      deleteCurrentGame(id) {
        const apiUrlDeleteGame = `https://balandrau.salle.url.edu/i3/arenas/${id}/play`;
        const token = localStorage.getItem("token");
        
        const config = {
          headers: { 'Content-Type': 'application/json', 'Bearer': token, 'Authorization': `Bearer ${token}`}
        };
        axios.delete(apiUrlDeleteGame, config)
        .then(async response=>{
          if(response.status === 204){
            console.log("Delete successfull");
          }else{
            console.log(response.error);
          }
        });
      }

    }
  };
  
  </script>
  
  <style scoped>
  .input-group {
    width: calc(33.33% - 20px);
    margin-bottom: 15px;
  }
  
  .bubble-box {
    padding: 8px;
    background-color: #ccc;
    color: #333;
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
    white-space: nowrap;
    font-size: 14px;
    margin-right: 10px;
    border: 1px solid #999;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    min-width: 140px;
  }
  
  .input-group input[type="text"] {
    width: calc(100% - 10px);
    padding: 8px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
  }
  
  .button {
    width: calc(100% - 20px);
    padding: 10px;
    background-color: #a3a28c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
  }
  </style>
  
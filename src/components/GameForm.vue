<template>
    <form v-on:submit.prevent>
      <div class="input-group">
        <div class="bubble-box">Board Size:</div>
        <input type="text" id="rows" v-model="boardSize" @input="changeBoardSize">
      </div>
      <div class="input-group">
        <div class="bubble-box">Player HP:</div>
        <input type="text" id="playerHP" v-model="playerHP">
      </div>
      <button type="button" class="button" v-on:click="startGame">Start Game</button>
    </form>
  </template>
  
  <script>
import router from '@/router';

  export default {
    name: 'GameForm',
    data() {
      return {
        boardSize: 0,
        playerHP: 0
      };
    },
    methods: {
    changeBoardSize() {
        this.$emit('change-board', { boardSize: this.boardSize, playerHP: this.playerHP });
    },
      startGame() {
        router.push("../game")
        //this.$emit('game-start', { boardSize: this.boardSize, playerHP: this.playerHP });
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
  
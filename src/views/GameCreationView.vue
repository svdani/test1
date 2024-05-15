<template>
    <main class="container">
      <form @submit.prevent="startGame">
        <div class="input-group">
          <div class="bubble-box">Board Size:</div>
          <input type="text" id="rows" v-model="numRows">
        </div>
        <div class="input-group">
          <div class="bubble-box">Player HP:</div>
          <input type="text" id="playerHP" v-model="playerHP">
        </div>
        <button type="submit" class="button">Start Game</button>
      </form>
      <section style="display: flex;">
        <Board :numRows="numRows" :numCols="numRows" />
      </section>
    </main>
  </template>
  
  <script>
  import Board from '../components/Board.vue';
  
  export default {
    components: {
      Board
    },
    data() {
      return {
        numRows: 0,
        numCols: 0,
        playerHP: 0
      };
    },
    methods: {
      startGame() {
        //Game
      }
    }
  };
  </script>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 900px;
        margin: 20px auto;
        padding: 20px;
        border: none;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
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
    .input-group label {
        display: block;
        margin-bottom: 5px;
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

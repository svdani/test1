<template>
  <main class="container">
    <GameForm @change-board="updateBoardSize" />
    <section style="display: flex;">
      <Board :numRows="boardSize" :numCols="boardSize" />
    </section>
  </main>
</template>

<script>
import Board from '../components/Board.vue';
import GameForm from '../components/GameForm.vue';

export default {
  components: {
    Board,
    GameForm
  },
  data() {
    return {
      playerHP: 0,
      boardSize: 0,
    };
  },
  methods: {
    updateBoardSize(data) {
      this.boardSize = parseInt(data.boardSize);
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
</style>

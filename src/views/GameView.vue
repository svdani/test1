<template>
  <main class="container">
    <div class="status-bar">
      <p>Vida del Jugador: {{ playerHP }}</p>
      <p>Vida del Enemigo: {{ enemyHP }}</p>
    </div>
    <Board :numRows="boardSize" :numCols="boardSize" />
    <div class="controls">
      <div class="movement-buttons">
        <button>↑</button>
        <div class="horizontal-buttons">
          <button>←</button>
          <button>→</button>
        </div>
        <button>↓</button>
      </div>
      <div class="attacks">
        <h2>Ataques del Jugador</h2>
        <table>
          <tr v-for="(attack, index) in playerAttacks" :key="index">
            <td>{{ attack.name }}</td>
            <td>{{ attack.damage }}</td>
          </tr>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import Board from '../components/Board.vue';

export default {
  name: 'GameView',
  components: {
    Board
  },
  props: {
    gameName: String,
    boardSize: Number,
    playerHP: Number,
    enemyHP: Number
  },
  data() {
    return {
      playerAttacks: [
        { name: 'Ataque 1', damage: 10 },
        { name: 'Ataque 2', damage: 20 },
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  max-width: 900px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.status-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  font-size: 18px;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.movement-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.horizontal-buttons {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

button {
  margin: 5px;
  padding: 10px;
  background-color: #a3a28c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #8e8c72;
}

.attacks {
  margin-left: 20px;
}

.attacks h2 {
  margin-bottom: 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 10px;
  text-align: left;
}
</style>

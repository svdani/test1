<template>
  <div class="container">
    <div class="status">
      <div>Jugador HP: {{ playerHP }}</div>
      <div>Enemigo HP: {{ playerHP }}</div>
    </div>
    <div class="board-container">
      <Board :numRows="boardSize" :numCols="boardSize" />
    </div>
    <div class="controls">
      <div class="direction-buttons">
        <button>Arriba</button>
        <button>Abajo</button>
        <button>Izquierda</button>
        <button>Derecha</button>
      </div>
      <div class="player-attacks">
        <h2>Ataques del Jugador</h2>
        <ul>
          <li v-for="attack in playerAttacks" :key="attack.attack_ID">
            {{ attack.attack_ID }} - Power: {{ attack.power }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Board from '../components/Board.vue';

export default {
  name: 'GameView',
  components: {
    Board,
  },
  props: {
    gameName: String,
    boardSize: Number,
    playerHP: Number
  },
  data() {
    return {
      playerAttacks: [],
    };
  },
  created() {
    this.fetchPlayerAttacks();
  },
  methods: {
    async fetchPlayerAttacks() {
      const token = localStorage.getItem('token');
      const config = {
        headers: { 'Content-Type': 'application/json', 'Bearer': token, 'Authorization': `Bearer ${token}`}
      };

      try {
        const response = await axios.get('https://balandrau.salle.url.edu/i3/players/attacks', config);
        this.playerAttacks = response.data;
      } catch (error) {
        console.error('Error fetching player attacks:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.status {
  margin-bottom: 20px;
}

.board-container {
  margin-bottom: 20px;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}

.direction-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.direction-buttons button {
  margin: 5px 0;
}

.player-attacks {
  text-align: left;
  margin-left: 20px;
}
</style>

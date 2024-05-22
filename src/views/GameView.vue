<template>
    <main class="container">
      <GameForm @change-board="updateBoardSize" />
      <section style="display: flex;">
        <Board :numRows="boardSize" :numCols="boardSize" />
        <div>
          <p>Vida del Jugador: {{ playerHP }}</p>
          <p>Vida del Enemigo: {{ enemyHP }}</p>
        </div>
        <div>
          <button>Arriba</button>
          <button>Abajo</button>
          <button>Izquierda</button>
          <button>Derecha</button>
        </div>
        <div>
          <h2>Ataques del Jugador</h2>
          <table>
            <tr v-for="(attack, index) in playerAttacks" :key="index">
              <td>{{ attack.name }}</td>
              <td>{{ attack.damage }}</td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import router from '@/router';
  import Board from '../components/Board.vue';
  import GameCreationView from './GameCreationView.vue';
  
  export default {
    components: {
      Board
    },
    data() {
      return {
        playerHP: 100,
        enemyHP: 100,
        boardSize: 5,
        numCols: 0,
        playerAttacks: [
          { name: 'Ataque 1', damage: 10 },
          { name: 'Ataque 2', damage: 20 },
        ],
      };
    },
    mounted() {
        
    },
    methods: {
      updateBoardSize(data) {
        this.boardSize = parseInt(data.boardSize);
      },
    }
  };
  </script>
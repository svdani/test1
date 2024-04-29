<template>
    <div>
      <game-item-component v-for="game in games" :key="game.id" :game="game" />
    </div>
  </template>
  
  <script>
  import GameItemComponent from './GameItemComponent.vue';
  
  export default {
    name: 'GameListComponent',
    components: {
      GameItemComponent
    },
    data() {
      return {
        games: [
          { id: 1, name: 'Available Game 1' },
          { id: 2, name: 'Available Game 2' },
          // Más juegos...
        ]
      }
    }
  }
  </script>
<template>
    <article style="display: flex; align-items: center;">
      <section v-for="game in games" :key="game.id" class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">     <!-- Loop pels jocs per mostrarlos -->

        <p>{{ game.game_ID }}</p>
        <button class="btn-small success btn-join">Join!</button>
      </section>
    </article>
  </template>
  
  <style scoped>
  .available_div_responsive {
    display: flex; 
    justify-content: space-between;
  }
  </style>

  <script>
    export default {
        props: {
        
        games: { // Espera un array de games que es passi com a prop
            type: Array,
            required: true
        }
        }
    }
  </script>
  
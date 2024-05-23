<template>
    <article style="display: flex; align-items: center;">
      <section v-for="game in games" :key="game.id" class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
        <p>{{ game.game_ID }}</p>
        <button class="btn-small success btn-join">Join!</button>
      </section>
    </article>
  </template>

  <script>
  export default {
    props: {
      games: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
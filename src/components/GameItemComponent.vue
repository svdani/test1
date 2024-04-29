<template>
  <div class="caja_blanca caja_blanca_joinable" style="display: flex; justify-content: space-between; align-items: center;">
    <p>{{ game.name }}</p>
    <button class="btn-small success btn-join">Join!</button>
  </div>
</template>

<script>
export default {
  name: 'GameItemComponent',
  props: {
    game: Object
  }
}
</script>

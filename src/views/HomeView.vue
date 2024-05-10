<template>

      Homme View<!-- Contenido de tu componente -->

</template>
  
  <script>
  export default {
  mounted() {
    // Obtener el usuario desde localStorage
    const user = localStorage.getItem("user");

    // Verificar si 'user' está presente en localStorage
    if (user) {
      // 'user' contiene datos, redirigir a la página JoinBattleView
      //this.$router.push({ name: 'joinView' });
      this.$router.push({ name: 'playerInfo' });

      
    } else {
      // 'user' no está presente en localStorage, redirigir a la página LoginPlayerView
      this.$router.push({ name: 'loginPlayer' });
    }
  }
};
</script>
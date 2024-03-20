<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>

  <div id="app">
    

    <!-- Botón de hamburguesa -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <span class="burger-menu material-symbols-outlined" @click="toggleMenu">menu</span>


    <!-- Menú -->
    <nav class="menu" :class="{ 'open': isMenuOpen }">
      <!-- <button class="close-button" @click="closeMenu">Cerrar</button>-->
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>    
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

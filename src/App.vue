<script setup>


import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false);
const isAboutOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleAbout = () => {
  isAboutOpen.value = !isAboutOpen.value;
};
</script>

<template>

  <nav id="app">
    

    <!-- Botón de hamburguesa -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <span class="burger-menu material-symbols-outlined" @click="toggleMenu">menu</span>


    <!-- Menú -->
    <nav class="menu" :class="{ 'open': isMenuOpen }">
      <!-- <button class="close-button" @click="closeMenu">Cerrar</button>-->
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>
          
          <span @click="toggleAbout">About</span> <!-- Opción principal con subopciones -->
          <ul v-if="isAboutOpen">
            <li><RouterLink to="/about/company">Company</RouterLink></li>
            <li><RouterLink to="/about/team">Team</RouterLink></li>
          </ul>
            
        </li>   
      </ul>
    </nav>
  </div>
</template>


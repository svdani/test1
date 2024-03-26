<script setup>
import { ref, defineExpose } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false);
const isSubMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleAbout = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value;
};

// Exponer las variables y métodos al template
defineExpose({ isMenuOpen, isSubMenuOpen, toggleMenu, toggleAbout });
</script>

<template>      
<header >
  <img src="@/assets/images/imgHeader.jpeg" alt="Imagen Menu">

  <nav id="app">
    <!-- Botón de hamburguesa -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <span class="burger-menu material-symbols-outlined" @click="toggleMenu">menu</span>

    <!-- Menú -->
    <nav class="menu" :class="{ 'open': isMenuOpen }">
      <ul>
        <li>
          <span @click="toggleAbout">Player Management</span> <!-- Opción principal con subopciones -->
          <ul v-if="isSubMenuOpen">
            <li><RouterLink to="/createPlayer">Create Player</RouterLink></li>
            <li><RouterLink to="/playerInfo">Player Info</RouterLink></li>
            <li><RouterLink to="/joinView">Join</RouterLink></li>
          </ul>
        </li> 
        <li><RouterLink to="/attackManagement">Attack Management</RouterLink></li>  
        <li>
          <span @click="toggleAbout">Store</span> <!-- Opción principal con subopciones -->
          <ul v-if="isSubMenuOpen">
            <li><RouterLink to="/createAttack">Create Attack</RouterLink></li>
            <li><RouterLink to="/sellAttack">Sell Attack</RouterLink></li>
            <li><RouterLink to="/buyAttack">Buy Attack</RouterLink></li>
          </ul>
        </li>   
        <li><RouterLink to="/ranking">Ranking</RouterLink></li>  
        <li>
          <span @click="toggleAbout">Game Adimistration</span> <!-- Opción principal con subopciones -->
          <ul v-if="isSubMenuOpen">
            <li><RouterLink to="/createAgameCreation">Create Game</RouterLink></li>
            <li><RouterLink to="/gameAvalible">Avaible Game</RouterLink></li>
            <li><RouterLink to="/gameFinder">Game Finder</RouterLink></li>
            <li><RouterLink to="/gameRecord">Game Record</RouterLink></li>

          </ul>
        </li>
        <li><RouterLink to="/ranking">Ranking</RouterLink></li>  

        <!--<li><RouterLink to="/">Home</RouterLink></li>-->
      </ul>
    </nav>
  </nav>

</header>
<section style="padding: 220px 200px" >
  <RouterView />
</section>

</template>
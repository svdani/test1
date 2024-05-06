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

// Expose variables and methods to the template
defineExpose({ isMenuOpen, isSubMenuOpen, toggleMenu, toggleAbout });
</script>

<template>      
<header  >
  <img src="@/assets/images/battle_arena_logo.png" alt="Imagen Menu" style="margin: auto; display: block; width: auto;">

  <nav id="menuHamburger">
    <!-- Botón de hamburguesa -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <span class="burger-menu material-symbols-outlined" @click="toggleMenu">menu</span>

    <!-- Menú -->
    <nav class="menu" :class="{ 'open': isMenuOpen }">
      <ul>
        <li>
          <span @click="toggleAbout">Player Management</span> <!-- Opción principal con subopciones -->
          <ul v-if="isSubMenuOpen">
            <li><RouterLink to="/loginPlayer">Login Player</RouterLink></li>
            <li><RouterLink to="/playerInfo">Player Info</RouterLink></li>
            <li><RouterLink to="/joinView">Join</RouterLink></li>
          </ul>
        </li> 
        <!--<li><RouterLink to="/attackManagement">Attack Management</RouterLink></li>  -->
        <li>
          <span @click="toggleAbout">Store</span> <!-- Opción principal con subopciones -->
          <ul v-if="isSubMenuOpen">
            <li><RouterLink to="/createAttack">Create Attack</RouterLink></li>
            <li><RouterLink to="/sellAttack">Sell Attack</RouterLink></li>
            <li><RouterLink to="/buyAttack">Buy Attack</RouterLink></li>
          </ul>
        </li>    
        <li>
          <span @click="toggleAbout">Game Adimistration</span> <!-- Opción principal con subopciones -->
          <ul v-if="isSubMenuOpen">
            <li><RouterLink to="/gameCreation">Create Game</RouterLink></li>
            <li><RouterLink to="/gameAvailable">Available Games</RouterLink></li>
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

<div style="padding: 0px 220px" >
  <RouterView />
</div>

</template>

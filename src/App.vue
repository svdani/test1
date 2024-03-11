<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />



      <!-- start nav -->
      <nav id="menu">
      <!-- start menu -->
      <ul>
        <li><a href="#">Player Management</a>
          <ul>
            <li><RouterLink to="/createPlayer">Create Player</RouterLink></li>
            <li><RouterLink to="/joinView">Join</RouterLink></li>
            <li><RouterLink to="/playerInfo">Player Info</RouterLink></li>
            <li><RouterLink to="/deletePlayer">Player Management</RouterLink></li>
          </ul>
        </li>
        <li><a href="#">Enlace 2</a>
          <ul>
            <li><a href="#">Enlace 2.1</a></li>
            <li><a href="#">Enlace 2.2</a></li>
            <li><a href="#">Enlace 2.3</a></li>
          </ul>
        </li>
        <li><a href="#">Enlace 3</a>
          <ul>
            <li><a href="#">Enlace 2.1</a></li>
            <li><a href="#">Enlace 2.2</a></li>
            <li><a href="#">Enlace 2.3</a></li>
          </ul>
        </li>
        <li><a href="#">Enlace 4</a>
          <ul>
            <li><a href="#">Enlace 2.1</a></li>
            <li><a href="#">Enlace 2.2</a></li>
            <li><a href="#">Enlace 2.3</a></li>
          </ul>
        </li>
        <li><a href="#">Enlace 5</a>
          <ul>
            <li><a href="#">Enlace 2.1</a></li>
            <li><a href="#">Enlace 2.2</a></li>
            <li><a href="#">Enlace 2.3</a></li>
          </ul>
        </li>
      </ul>
      <!-- end menu -->
      </nav>
      <!-- end nav -->
      

      <!--
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/playerManagement">Player Management</RouterLink>
        <RouterLink to="/attackManagement">Attack Management</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<template>
    <section class="left-align">
      <article style="display: flex;">
        <div style="margin-top: 10px;">
          <input type="text" id="site-search" @input="$emit('update-search', $event.target.value)" />
        </div>
        <button class="btn success btn-right" @click="filterGames">Search</button>
      </article>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Assuming you have a list of games and a search term
        games: [], // Your array of games
        searchTerm: '' // The term to search for
      };
    },
    methods: {
      filterGames() {
        // Filter the games based on the search term
        let filteredGames = this.games.filter(game => game.name.includes(this.searchTerm));
        this.$emit('update-search', this.searchTerm);
        // Update the games list with the filtered games
        this.games = filteredGames;
      },
      // Make sure to update the searchTerm when the input event is emitted
      updateSearch(newSearchTerm) {
        this.searchTerm = newSearchTerm;
      }
    }
  };
  </script>
  
<template>
    <div class="caja_gris_available_games_responsive caja_gris_joinable">
      <div style="display: flex; justify-content: space-between;">
        <SearchBar @update-search="updateSearchQuery" />
        <GameFilter @update-filters="applyFilters" />
      </div>
      <AvailableGameList :games="filteredGames" />
    </div>
  </template>
  
  <script>
  import GameFilter from '@/components/GameFilter.vue';
  import AvailableGameList from '@/components/AvailableGameList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import axios from 'axios';
  
  export default {
    components: {
      GameFilter,
      AvailableGameList,
      SearchBar
    },
    data() {
      return {
        gameList: [],
        filteredGames: [],
        filters: {
          joinable: false,
          inProgress: false
        },
        searchQuery: ''
      };
    },
    mounted() {
      this.fetchCurrentArenas();
    },
    methods: {
      fetchCurrentArenas() {
        const apiUrl = `https://balandrau.salle.url.edu/i3/players/arenas/current`;
        const token = localStorage.getItem("token");
  
        const headers = {
          'Accept': 'application/json',
          'Bearer': token
        };
  
        axios.get(apiUrl, { headers })
          .then(response => {
            if (response.status === 200) {
              this.gameList = response.data;
              this.filteredGames = this.gameList;
            } else {
              console.error('Error fetching current arenas:', response.statusText);
            }
          })
          .catch(error => {
            console.error('Error fetching current arenas:', error);
          });
      },
      applyFilters(filters) {
        this.filters = filters;
        this.filterGames();
      },
      updateSearchQuery(searchQuery) {
        this.searchQuery = searchQuery;
        this.filterGames();
      },
      filterGames() {
        this.filteredGames = this.gameList.filter(game => {
          const matchesFilters = (!this.filters.joinable || (!game.start && !game.finished)) &&
                                 (!this.filters.inProgress || (game.start && !game.finished));
          const matchesSearchQuery = game.game_ID.toLowerCase().includes(this.searchQuery.toLowerCase());
  
          return matchesFilters && matchesSearchQuery;
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .available_div_responsive {
    display: flex;
    justify-content: space-between;
  }
  </style>
  
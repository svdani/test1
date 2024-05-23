<template>
    <div class="caja_gris_available_games_responsive caja_gris_joinable">
      <div style="display: flex; justify-content: space-between;">
        <GameFilter @update-filters="applyFilters" />
      </div>
      <AvailableGameList :games="filteredGames" />
    </div>
  </template>
  
  <script>
  import GameFilter from '@/components/GameFilter.vue';
  import AvailableGameList from '@/components/AvailableGameList.vue';
  import axios from 'axios';
  
  export default {
    components: {
      GameFilter,
      AvailableGameList
    },
    data() {
      return {
        gameList: [],
        filteredGames: [],
        filters: {
          joinable: false,
          inProgress: false
        }
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
        this.filteredGames = this.gameList.filter(game => {
          return (!this.filters.joinable || (!game.start && !game.finished)) &&
                 (!this.filters.inProgress || (game.start && !game.finished));
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
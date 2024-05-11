<template>
    <main class="caja_gris caja_ranking">
      <table v-if="playerInfo && playerInfo.length > 0">
        <tr class="bottom-border">
          <th style="width: 50%;">Name</th>
          <th style="width: 50%;">Level</th>
        </tr>
        <tr v-for="(player, index) in filteredPlayerInfo" :key="index" class="cellTable">
          <td>{{ player.player_ID }}</td>
          <td>{{ player.level }}</td>
        </tr>
        <!-- Mostrar mensaje si no hay resultados -->
        <tr v-if="filteredPlayerInfo.length === 0">
          <td colspan="2" class="no-results">No players found</td>
        </tr>
      </table>
      <div v-else>
        <p>Loading...</p>
      </div>
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        playerInfo: [], // Lista de jugadores
        filteredPlayerInfo: [] // Lista de jugadores filtrados
      };
    },
    created() {
      // Realizar la llamada a la API para cargar los datos iniciales al crear el componente
      this.fetchPlayerData();
    },
    methods: {
      fetchPlayerData() {
        const token = localStorage.getItem("token");
        const apiUrl = 'https://balandrau.salle.url.edu/i3/players';
  
        axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
          .then(response => {
            if (response.status === 200) {
              this.playerInfo = response.data;
              this.filteredPlayerInfo = [...this.playerInfo]; // Inicialmente mostrar todos los jugadores
            } else {
              console.error('Error al obtener datos del jugador:', response.statusText);
            }
          })
          .catch(error => {
            console.error('Error al realizar la solicitud:', error);
          });
      },
      filterData(searchTerm) {
        if (!searchTerm) {
          this.filteredPlayerInfo = [...this.playerInfo]; // Mostrar todos los jugadores si no hay término de búsqueda
          return;
        }
        
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();
        this.filteredPlayerInfo = this.playerInfo.filter(player =>
          player.player_ID.toLowerCase().includes(normalizedSearchTerm)
        );
      }
    }
  };
</script>
<style>
  /* Estilo para el borde inferior de la fila */
  .bottom-border {
    border-bottom: 2px solid black; /* 2px de ancho y sólido, puedes ajustar estos valores según necesites */
  }

  td{
    text-align: center;  
  }

  .cellTable{
    font-weight: normal;
  }

</style>
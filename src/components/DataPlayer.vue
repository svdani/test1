<template>
  <section>
    <button class="btn success btn-right" type="button" @click="viewPlayerHistory">View Player history</button>
    
    <article class="caja_gris" style="width: 95%;">
      <img class="imagen-circular" :src="playerInfo ? playerInfo.img : 'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'" alt="Profile Image">

      <section style="width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>{{ playerInfo ? playerInfo.player_ID : 'Name' }}</h3>
          <span style="color:#FFC700; font-size:25px;">{{ playerInfo ? `${playerInfo.coins} $` : '' }}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label for="lvl">Lv{{ playerInfo ? playerInfo.level : '0' }}</label>
          <progress id="experience" max="100" :value="calculateExperiencePercentage()"> {{ calculateExperiencePercentage() }}%</progress>
        </div>
      </section>
    </article>

    <!-- Mostrar tabla paginada de datos de jugador -->
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Coins</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in displayedPlayers" :key="index">
            <td>{{ player.player_ID }}</td>
            <td>{{ player.level }}</td>
            <td>{{ player.coins }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Controles de paginación -->
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage * pageSize >= totalCount">Next</button>
      </div>
    </section>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      playerInfo: null,           // Datos del jugador actual
      displayedPlayers: [],       // Jugadores a mostrar en la tabla paginada
      currentPage: 1,             // Página actual
      pageSize: 10,               // Cantidad de jugadores por página
      totalCount: 0,              // Total de jugadores
      token: localStorage.getItem("token"),  // Token de autenticación
      user: localStorage.getItem("user")     // ID del usuario actual
    };
  },
  mounted() {
    this.fetchPlayerData();
  },
  methods: {
    fetchPlayerData() {
      const apiUrl = `https://balandrau.salle.url.edu/i3/players/${this.user}`;

      // Configuración de los encabezados de la solicitud
      const headers = {
        'Accept': 'application/json',
        'Bearer': this.token  // Incluye el token de autenticación como Bearer token
      };

      // Realizar la solicitud GET a la API utilizando Axios y los encabezados configurados
      axios.get(apiUrl, { headers })
        .then(response => {
          if (response.status === 200) {
            this.playerInfo = response.data; // Datos del jugador actual
            this.fetchPaginatedPlayers();    // Obtener jugadores paginados
          } else {
            console.error('Error al obtener datos del jugador:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
        });
    },
    fetchPaginatedPlayers() {
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players';

      // Configuración de la solicitud para obtener jugadores paginados
      const headers = {
        'Accept': 'application/json',
        'Bearer': this.token  // Incluye el token de autenticación como Bearer token
      };

      const params = {
        _page: this.currentPage,
        _limit: this.pageSize
      };

      // Realizar la solicitud GET para obtener jugadores paginados
      axios.get(apiUrl, { headers, params })
        .then(response => {
          if (response.status === 200) {
            this.displayedPlayers = response.data;            // Jugadores para mostrar en la tabla
            this.totalCount = parseInt(response.headers['x-total-count']); // Total de jugadores en la API
          } else {
            console.error('Error al obtener datos de jugadores paginados:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud de jugadores paginados:', error);
        });
    },
    nextPage() {
      // Ir a la siguiente página si no se excede el límite
      if (this.currentPage * this.pageSize < this.totalCount) {
        this.currentPage++;
        this.fetchPaginatedPlayers(); // Obtener jugadores para la nueva página
      }
    },
    prevPage() {
      // Ir a la página anterior si no es la primera página
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchPaginatedPlayers(); // Obtener jugadores para la nueva página
      }
    },
    calculateExperiencePercentage() {
      if (this.playerInfo) {
        return (this.playerInfo.experience / this.playerInfo.maxExperience) * 100;
      }
      return 0;
    },
    viewPlayerHistory() {
      // Redireccionar a la página de historial del jugador
      this.$router.push('/playerGameHistory');
    }
  }
};
</script>

<style>
/* Estilos CSS según sea necesario */
</style>

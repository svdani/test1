<template>
    <h3 class="titelPage">Ranking </h3>


    <form class="caja_ranking" onsubmit="return false;" id='search-form'>
      <input v-model="searchName" id="search-ranking" placeholder="Search name" type="text"/>

      <button id="btn-search-ranking" class="btn-small success" @click="searchPlayers"><span>Search!</span></button>
    </form>

    <main class="caja_gris caja_ranking">
        <table>
            <tr class="bottom-border">
                <th style="width: 50%;">Name </th>
                <th style="width: 50%;">Lvl</th>
            </tr>
            <!-- Iterar sobre playerInfo y renderizar las filas -->
            <tr v-for="(player, index) in playerInfo" :key="index" class="cellTable">
                <td>{{ player.player_ID }}</td>
                <td>{{ player.level }}</td>
            </tr>
        </table>

    </main>
</template>

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


<script>
import axios from 'axios';



// URL de la API y token de autenticación


export default {
  data() {
    return {
      playerInfo: null, // Inicializa playerInfo como null hasta que se carguen los datos
      searchName: ''
    };
  },
  mounted() {
    // URL de la API y token de autenticación
    const token = localStorage.getItem("token");
    
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players';

    // Configuración de los encabezados de la solicitud
    const headers = {
      'Accept': 'application/json',
      'Bearer': `${token}`  // Incluye el token de autenticación como Bearer token
    };

    // Realiza la solicitud GET a la API utilizando Axios y los encabezados configurados
    axios.get(apiUrl, { headers })
      .then(response => {
          if (response.status === 200) {
              this.playerInfo = response.data; // Asigna la respuesta de la API a playerInfo
              console.log(response.data);
          } else {
              console.error('Error al obtener datos del jugador:', response.statusText);
          }
      })
      .catch(error => {
          console.error('Error al realizar la solicitud:', error);
      });
  },
  methods: {
    
  
    // Función para buscar jugadores por nombre
    searchPlayers() {
      const token = localStorage.getItem("token");
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players';
      const searchTerm = this.searchName.trim(); // Obtén el nombre de búsqueda y elimina espacios en blanco

      console.log('Search term:', searchTerm);

      // Configuración de los encabezados de la solicitud
      const headers = {
        'Accept': 'application/json',
        'Bearer': `${token}`  // Incluye el token de autenticación como Bearer token
      };

      let params = {}; // Parámetros para la solicitud GET

      if (searchTerm) {
        params = { name_contains: searchTerm }; // Usar name_contains para realizar una búsqueda por nombre parcial
      }

      axios.get(apiUrl, { headers, params })
        .then(response => {
          if (response.status === 200) {

            console.log(response.data);
            // Filtrar los objetos donde el campo 'name' sea 'dani'
            //const filteredData = response.data.filter(item => item.player_ID === searchTerm);

            const filteredData = response.data.filter(item => {
                // Comprueba si el ID del jugador (item.player_ID) contiene el término de búsqueda (searchTerm)
                return item.player_ID.includes(searchTerm);
            });
            if (response.data && Array.isArray(response.data)) {

              this.playerInfo = filteredData;
              console.log(filteredData);
            } else {
              this.playerInfo = [];
              console.log('No se encontraron registros');
            }
          } else {
            console.error('Error al obtener datos del jugador:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
        });
    }
  }

};

</script>
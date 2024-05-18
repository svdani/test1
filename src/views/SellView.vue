<template>

  <header>
    <h3 class="titelPage">Sell Attacks</h3>
  </header>
  <main>
    <div class="caja_gris caja_sellattack">
      <BackpackTable :attacks="filteredAttacksBag" style="margin-right: 5px;"/>
      <div class="buttons-container">
       <!-- <button class="btn btn_move success">&lt;&lt;</button>
        <button class="btn btn_move success">&gt;&gt;</button>  --> 
      </div>
      <StoreTable :attacks="filteredAttacksSell" style="margin-left: 5px;"/>
      <div class="coins">Coins: 27800</div> 
    </div>
  </main>

</template>

<script>
import BackpackTable from '../components/BackpackTable.vue';
import StoreTable from '../components/StoreTable.vue';
import axios from 'axios';

export default {
  components: {
    BackpackTable,
    StoreTable
  },
  data() {
    return {
      attackLista: [],
      filteredAttacksBag: [], // Lista de ataques en la mochila
      filteredAttacksSell: [] // Lista de ataques en venta
    };
  },
  created() {
    this.fetchAttackPlayerData();
  },
  methods: {
    fetchAttackPlayerData() {
      console.log("fetchAttackPlayerData");
      const token = localStorage.getItem('token');
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players/attacks';

      axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
        .then(response => {
          if (response.status === 200) {
            this.attackLista = response.data;
            console.log(response.data);
            this.filterAttacks(); // Filtrar los ataques después de recibir los datos
          } else {
            console.error('Error al obtener datos del jugador:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
        });
    },
    filterAttacks() {
      // Filtrar los ataques donde on_sale es true o false
      this.filteredAttacksSell = this.attackLista.filter(attack => attack.on_sale);
      console.log(this.filteredAttacksSell)
      this.filteredAttacksBag = this.attackLista.filter(attack => !attack.on_sale);
      console.log(this.filteredAttacksBag)
    }
  }
};
</script>

<style>
    input[type="number"] {
      width: 200px; /* Ancho del campo de entrada */
      padding: 10px; /* Espacio interno */
      font-size: 16px; /* Tamaño de la fuente */
      border: 1px solid #ccc; /* Borde del campo */
      border-radius: 4px; /* Borde redondeado */
      box-sizing: border-box; /* Incluye el borde y el relleno en el ancho total */
    }

    /* Estilo para resaltar cuando el campo tiene el foco */
    input[type="number"]:focus {
      outline: none; /* Elimina el contorno predeterminado */
      border-color: #007bff; /* Cambia el color del borde al enfocarse */
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Sombra al enfocarse */
    }
    .caja_sellattack {
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin: 20px;
      display: flex;
      justify-content: space-between;
    }
    .buttons-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px; 
    }

    .btn_move {
      width: 3rem;
      height: 2rem;
      padding: 0px;
      margin: 5px 0;

    }
    .coins {
        position: absolute;
        top: -1px; 
        right: 10px;
    }


  </style>
  

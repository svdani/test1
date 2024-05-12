<template>

  <header>
    <h3 class="titelPage">Sell Attacks</h3>
  </header>
  <main>
    <div class="caja_gris caja_sellattack">
      <BackpackTable />
      <div class="buttons-container">
        <button class="btn btn_move success">&lt;</button>
        <button class="btn btn_move success">&gt;</button>
        <button class="btn btn_move success">&lt;&lt;</button>
        <button class="btn btn_move success">&gt;&gt;</button>   
      </div>
      <StoreTable />
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
      const token = localStorage.getItem('token');
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players/attacks';

      axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
        .then(response => {
          if (response.status === 200) {
            this.attackLista = response.data;
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
      this.filteredAttacksBag = this.attackLista.filter(attack => !attack.on_sale);
    }
  }
};
</script>

<!--<template>
  <div id="app">
    <header>
      <h3 class="titelPage">Sell Attacks</h3>
    </header>
    <main>
      <div class="caja_gris caja_sellattack">
        <div class="left-table">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Backpack</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b><i>Kamehame</i></b></td>
                <td><b><i>3k</i></b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="buttons-container">
            <button class="btn btn_move success">&lt;</button>
            <button class="btn btn_move success">&gt;</button>
            <button class="btn btn_move success">&lt;&lt;</button>
            <button class="btn btn_move success">&gt;&gt;</button>   
        </div>
          
        <div class="right-table">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Store</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b><i>Genkidama</i></b></td>
                <td><b><i>5k</i></b></td>
              </tr>
              <tr>
                <td><b><i>Keizen</i></b></td>
                <td><b><i>1k</i></b></td>
              </tr>
            </tbody>
          </table>
          <div class="coins">Coins: 27800</div> 
        </div>
      </div>
      <div class="sell-container">
        <button class="btn success">SELL</button> 
      </div>
    </main>
  </div>
</template>-->
  
<style>

    .caja_sellattack {
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin: 20px;
      display: flex;
      justify-content: space-between;
      position: relative; 
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
      /*color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 
      */
    }
    .coins {
        position: absolute;
        top: -1px; 
        right: 10px;
    }

  /*
    .custom-table {
      width: 100%;
      border-collapse: collapse;
    }
  
    .custom-table th,
    .custom-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
  
    .custom-table th {
      background-color: #f2f2f2;
    }
  
    .left-table,
    .right-table {
      width: calc(50% - 10px);  
    }
  
  


    .sell-container {
      display: flex;
      justify-content: center;
      margin-top: 20px; 
    }
    */
  </style>
  
<template>
  <div id="app">
    <header>
      <h3 class="titlePage">Sell Attacks</h3>
    </header>
    <main>
      <div class="caja_gris caja_sellattack">
        <BackpackTable />
        <div class="buttons-container">
          <button class="btn btn_move success"><</button>
          <button class="btn btn_move success">></button>
          <button class="btn btn_move success"><<</button>
          <button class="btn btn_move success">>></button>   
        </div>
        <StoreTable />
        <div class="coins">Coins: 27800</div> 
      </div>
    </main>
  </div>
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
    },
    toggleMenu() {
      // Toggle the active class on the hamburger menu
      var menu = document.getElementById('hamburger-menu');
      menu.classList.toggle('active');
    }
  },
  mounted() {
    // Add click event listener for the hamburger menu button
    var button = document.querySelector('.hamburger-icon .btn');
    button.addEventListener('click', this.toggleMenu);
  }
};
</script>

<style>
  .caja_gris {
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
  }
  .coins {
    position: absolute;
    top: -1px; 
    right: 10px;
  }
  .menu {
    position: relative;
    z-index: 1;
  }
  .hamburger-icon .btn {
    font-size: 24px;
    cursor: pointer;
  }
  .menu-content {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2; /* Higher than the page content */
  }
  .menu.active .menu-content {
    display: block;
  }
</style>

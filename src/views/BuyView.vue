<template>
    <header>
        <h3 class="titelPage">Buy Attacks</h3>
    </header>
    <main>
        <div class="caja_gris_buy_responsive caja_gris_joinable">
            
            <table class="border_table">
                <tr style="font-size: 150%;">
                    <th style="width: 22%;">Attack</th>
                    <th style="width: 22%;">Position</th>
                    <th style="width: 22%;">Power</th>
                    <th style="width: 22%;">Price</th>
                    <th style="width: 12%;"></th>

                </tr>

                <tr v-for="(attack, index) in filteredAttacklist" :key="index" class="cellTable" style="text-align: center;">
                    <td>{{ attack.attack_ID }}</td>
                    <td>{{ attack.positions }}</td>
                    <td>{{ attack.power }}</td>
                    <td>{{ attack.price }}$</td>

                    <td style="border: none;"><button @click="buyAttack(attack)" class="btn-wide success btn-join" >Buy!</button></td>
                </tr> 
            </table>
        </div>
    </main>
    
</template>

<script>
import axios from 'axios';
  
  export default {
    data() {
      return {
        Attacklist: [], 
        filteredAttacklist: [] 
      };
    },
    created() {
      
      this.getAttacksList();
    },
    methods: {
      getAttacksList() {
        const token = localStorage.getItem("token");
        const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks';
  
        axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
          .then(response => {
            if (response.status === 200) {
                console.log(response.data);
                this.Attacklist= response.data;
                this.filteredAttacklist = [...this.Attacklist]; 
            } else {
              console.error('Error al obtener datos del jugador:', response.statusText);
            }
          })
          .catch(error => {
            console.error('Error al realizar la solicitud:', error);
          });
      },

      buyAttack(attack){
        const token = localStorage.getItem("token");
        
        const apiUrl = `https://balandrau.salle.url.edu/i3/shop/attacks/${attack.attack_ID}/buy`;

      console.log("apiUrl",apiUrl);
      console.log("Token:", token);

      axios.post(apiUrl, {},{ headers: { 'Accept': 'application/json', 'Bearer': token } })
        .then(response => {
          console.log('Response:', response.data);
          alert("Attack buyed")
          window.location.reload();
        })
        .catch(error => {
            console.log('Error:', error);
            if (error.response && error.response.status === 403) {
                // Maneja el error específico de "Not enough coins to buy it"
                alert("Not enough coins to buy this attack");
            } else {
                // Maneja otros errores
                alert("Failed to purchase attack");
            }
        });
      }

      //Si se añade buscador
      //filterData(searchTerm) {
      //  if (!searchTerm) {
      //    this.filteredPlayerInfo = [...this.playerInfo]; // Mostrar todos los jugadores si no hay término de búsqueda
      //    return;
      //  }
      //  
      //  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
      //  this.filteredPlayerInfo = this.playerInfo.filter(player =>
      //    player.player_ID.toLowerCase().includes(normalizedSearchTerm)
      //  );
      //}
    }
  };
</script>

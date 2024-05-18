<template>
    <div class="left-table">
        <table class="custom-table">
            <thead>
                <tr>
                    <th>Attack Name</th>
                    <th>Power</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(attack, index) in attacks" :key="index">
                    <td>{{ attack.attack_ID }}</td>
                    <td>{{ attack.power }}</td>
                    <td class="cellAction">
                      <input type="number" style="max-width: 70px;" class="form-control" placeholder="0$" v-model="priceAttack">
                      <button class="btn btn_move success" @click="sellAttack(attack)">Sell</button>
                  </td>
                </tr>
            </tbody>
      </table>
    </div>
</template>
<script>
import axios from 'axios';
  export default {
    props: {
      attacks: {
        type: Array,
        required: true
      }
    },
    methods: {
      sellAttack(attack) {
        console.log("Realizando solicitud de venta...");
        const token = localStorage.getItem("token");
        const price = this.priceAttack;

        const infoSell = {
          price:price,
        };
        
        const config = {
          headers: { 
              'Content-Type': 'application/json',
              'Bearer': token, }
        };
         console.log("Token:", token);
        console.log(this.attacks);
        const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks/'+attack.attack_ID+"/sell";

        console.log("apiUrl",apiUrl);

        axios.post(apiUrl, infoSell, config)
          .then(response => {
            console.log('Response:', response.data);
            //alert("Attack equiped")
            window.location.reload();
          })
          .catch(error => {
            console.log('Error:', error.response.data.error.message);
            if (error.response && error.response.status === 403 && error.response.data.error.message === "You can't have more than 3 attacks equipped") {
                  alert("You already have the maximum number of attacks equipped");
              } else {
                  alert("Failed to purchase attack");
              }
          });
  
      }
    }
    
  };
</script>
  
  <style scoped>
  /* Estilos específicos para BackpackTable.vue */
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
  
  .left-table {
    width: 50%; /* 50% width for left table */
  }

  .cellAction{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  </style>
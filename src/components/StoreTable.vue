<template>
    
    
  <div class="left-table">
      <table class="custom-table">
      <thead>
        <tr>
          <th>Attack Name</th>
          <th>Price</th>

        </tr>
      </thead>
      <tbody>
<!--     <tr v-for="(attack, index) in attacks" :key="index">-->   
        <tr v-for="(attack, index) in filteredAttacks" :key="index">
          <td>{{ attack.attack_ID }}</td>
          <td>{{ attack.price }}$</td>

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
  data() {
    return {
      filteredAttacks: []
    };
  },
  methods: {
    //sellAttack(attack) {
    //  console.log(`Selling attack: ${attack.attack_ID}`);
    // 
    //},
    getAttacksList() {
      const token = localStorage.getItem("token");
      const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks';

      axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
        .then(response => {
          if (response.status === 200) {
            const apiAttacks = response.data;
            console.log("this.apiAttacks=="+apiAttacks)
            console.log(apiAttacks)
            // Filtrar apiAttacks para obtener solo aquellos que coincidan con attack_ID en this.attacks
            this.filteredAttacks = apiAttacks.filter(apiAttack => 
              this.attacks.some(attack => attack.attack_ID === apiAttack.attack_ID)
            );
            console.log("this.filteredAttacks=="+this.filteredAttacks)
            console.log(this.filteredAttacks)
          } else {
            console.error('Error al obtener datos del jugador:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
        });
    }
  },
  mounted() {
    this.getAttacksList();
  }
};
</script>

<style scoped>

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
</style>
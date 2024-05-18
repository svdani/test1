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
          <tr v-for="(attack, index) in attacks" :key="index">
            <td>{{ attack.attack_ID }}</td>
            <td>{{ attack.price }}</td>

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
    },
    attackIDToFilter: {
      type: Number, // Tipo específico del ID a comparar
      required: true
    }
  },
  data() {
    return {
      filteredAttacks: [] // Array para almacenar los ataques filtrados
    };
  },
  methods: {
    getAttacksList() {
      const token = localStorage.getItem('token');
      const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks';

      axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` } })
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
            // Filtrar los ataques basados en el ID proporcionado desde el padre
            this.filteredAttacks = response.data.filter(attack => attack.attack_ID === this.attackIDToFilter);
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
    // Llamar al método para obtener y filtrar los ataques al cargar el componente
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
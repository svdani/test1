<template>
    
    
    <div class="left-table">
        <table class="custom-table">
        <thead>
          <tr>
            <th>Attack Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(attack, index) in attacks" :key="index">
            <td>{{ attack.attack_ID }}</td>
            <td>{{ attack.price }}</td>
            <td>
              <button @click="sellAttack(attack)">Sell</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<!-- <h3>Attacks for Sale</h3>
<template>
    <div class="left-table">
      <table class="custom-table">
        <thead>
          <tr>
            <th>Backpack</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in backpackItems" :key="index">
            <td><b><i>{{ item.name }}</i></b></td>
            <td><b><i>{{ item.price }}</i></b></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
-->  



<script>
  export default {
    props: {
      attacks: {
        type: Array,
        required: true
      }
    },
    methods: {
      sellAttack(attack) {
        // Lógica para vender el ataque
        console.log(`Selling attack: ${attack.attack_ID}`);
        // Realizar la petición a la API para cambiar el estado del ataque a vendido
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
</style>
<template>
    <div class="left-table">
        <table class="custom-table">
            <thead>
                <tr>
                    <th>Attack Name</th>
                    <th>Power</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(attack, index) in attacks" :key="index">
                    <td>{{ attack.attack_ID }}</td>
                    <td>{{ attack.power }}</td>
                </tr>
            </tbody>
      </table>
    </div>
</template>
<script>
  export default {
    props: {
      attacks: {
        type: Array,
        required: true
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
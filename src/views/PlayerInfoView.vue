<!-- src/App.vue -->
<template>
  <main>
    <DataPlayer/>
    <Equipment/>
    <BackPack/>
    <section style="display: flex; justify-content: center;">
      <button class="btn danger" @click="deletePlayer">Delete Player</button>
    </section>
  </main>
</template>
  
<script>
import DataPlayer from '../components/DataPlayer.vue';
import Equipment from '../components/Equipment.vue';
import BackPack from '../components/BackPack.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    DataPlayer,
    Equipment,
    BackPack
  },
  methods: {
    deletePlayer() {
      console.log("Realizando solicitud de borrado...");

      const token = localStorage.getItem("token");
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players';

      axios.delete(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
        .then(response => {
          console.log('Borrado exitoso:', response.data);
          this.$router.push({ name: 'loginPlayer' });
          // Aquí puedes realizar cualquier acción adicional después del borrado
        })
        .catch(error => {
          console.error('Error al borrar:', error);
        });
    }
  }
};
</script>

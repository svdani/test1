<template>
  <section>
    <button class="btn success btn-right" type="button" @click="viewPlayerHistory">View Player History</button>
    
    <article class="caja_gris" style="width: 95%;">
      <img class="imagen-circular" :src="playerInfo ? playerInfo.img : 'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'" alt="Profile Image">

      <section style="width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>{{ playerInfo ? playerInfo.player_ID : 'Name' }}</h3>
          <span style="color:#FFC700; font-size:25px;">{{ playerInfo ? `${playerInfo.coins} $` : '' }}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label for="lvl">Lv{{ playerInfo ? playerInfo.level : '0' }}</label>
          <progress id="experience" max="100" :value="calculateExperiencePercentage()"> {{ calculateExperiencePercentage() }}%</progress>
        </div>
      </section>
    </article>

  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      playerInfo: null,
      playerHealth: 100,           // Datos del jugador actual
      token: localStorage.getItem("token"),  // Token de autenticación
      user: localStorage.getItem("user")     // ID del usuario actual
    };
  },
  mounted() {
    this.fetchPlayerData();
  },
  methods: {
    fetchPlayerData() {
      const apiUrl = `https://balandrau.salle.url.edu/i3/players/${this.user}`;

      const headers = {
        'Accept': 'application/json',
        'Bearer': this.token
      };

      axios.get(apiUrl, { headers })
        .then(response => {
          if (response.status === 200) {
            this.playerInfo = response.data;
            localStorage.setItem("coins", this.playerInfo.coins);
          } else {
            console.error('Error al obtener datos del jugador:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
        });
    },
    calculateExperiencePercentage() {
      if (this.playerInfo) {
        return (this.playerInfo.experience / this.playerInfo.maxExperience) * 100;
      }
      return 0;
    },
    viewPlayerHistory() {
      this.$router.push('/playerGameHistory');
    }
  }
};
</script>

<style>
/* Estilos CSS según sea necesario */
</style>

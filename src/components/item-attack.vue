<template>
    <article class="caja_blanca caja_vertical_center">
        <section style="display: block;">
            <h4><span class="tagLabel">Name: </span>{{ attack.attack_ID }}</h4>
            <h4><span class="tagLabel">X,Y: </span>{{ attack.positions }}</h4>
            <h4><span class="tagLabel">Power: </span>{{ attack.power }}</h4>
        </section>
        <button @click="unequipAttack" class="button_overlay" style="padding:4px;">
            <span class="material-symbols-outlined" style="font-size: xx-large;">
                close
            </span>
        </button>
        <img src="../assets/images/slash.jpg" class="img-attack">
        
    </article>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    attack: {
      type: Object,
      required: true
    }
  },
  methods: {
    unequipAttack() {
      console.log("Realizando solicitud de desequipado...");
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      const config = {
        headers: { 
            'Content-Type': 'application/json',
            'Bearer': token, 
            'Authorization': `Bearer ${token}` }
      };
      
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players/attacks/'+this.attack.attack_ID;

      console.log("apiUrl",apiUrl);

      axios.delete(apiUrl, config)
        .then(response => {
          console.log('Response:', response.data);
          alert("Attack unequiped")
          window.location.reload();
          // Aquí puedes manejar la respuesta de la API, como mostrar una notificación de éxito, etc.
        })
        .catch(error => {
          console.error('Error:', error);
          // Aquí puedes manejar errores, como mostrar un mensaje de error al usuario
        });
  
      }
    }
};
</script>
<style>
.tagLabel{
    color: grey;
}
</style>
<template>
    <main class="caja_gris_login_responsive content">
        <!-- prevent default -->
        <form class="flex-container" onsubmit="return false;">
          <input type="text" class="form-control" placeholder="Player name" v-model="playerName">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
          <button id="btnCreate" @click="inicioSession" class="btn success">Log in</button>
          <p><a href="../createPlayer" class="link">¿No tienes cuenta? Registrate</a></p>
        </form>
    </main>
</template>

<script>
//import axios from 'axios';
//stopPropagation




export default {
  data() {
    return {
      playerName: '',
      password: '',
      img: ''
    };
  },
  methods: {
    inicioSession() {
      console.log("Realizar Solicitud");

      // URL de la API que quieres consultar
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players/join';

      // Datos a enviar en la solicitud (player_ID, password, img)
      const datosSolicitud = {
        player_ID: this.playerName,
        password: this.password,
      };

      // Opciones para la solicitud fetch, incluyendo el método POST y el cuerpo de la solicitud
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosSolicitud)
      };

      // Realizar la solicitud utilizando fetch() con las opciones
      fetch(apiUrl, requestOptions)
        .then(response => {
          // Verificar si la respuesta es exitosa (estado 200)
          if (response.ok) {
            // Convertir la respuesta a JSON
            return response.json();
          }
          // Si la respuesta no es exitosa, lanzar un error
          throw new Error('La solicitud a la API falló');
        })
        .then(data => {
          // Hacer algo con los datos obtenidos de la API
          console.log('Respuesta de la API:', data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.player_ID);
          this.$router.push({ name: 'playerInfo' });
          
          //console.log('Respuesta ??', data.token);
        })
        .catch(error => {
          // Manejar cualquier error que ocurra durante la solicitud
          console.error('Error al realizar la solicitud:', error);
        });
    }
    
    
  }
};


</script>

<style>

.flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-control, .form-control-file, .btn {
    margin-top: 10px;
    text-align: center;
}
.content{
    width: 50%;
    text-align: left;
    margin: auto;
    justify-content: center;
    margin-top: 3rem;
}
</style>
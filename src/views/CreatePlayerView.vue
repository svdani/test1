import axios from 'axios';
<template>
    <main class="caja_gris content">
        <!-- prevent default -->
        <form class="flex-container" onsubmit="return false;">
            
          <input type="text" class="form-control" placeholder="Player name" v-model="playerName">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
          <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirmPwd">
          <input type="text" class="form-control" placeholder="imageFile" v-model="img">
          <button id="btnCreate" @click="registro" class="btn success">Registro</button>
        </form>
    </main>
</template>

<script>

//stopPropagation


export default {
  data() {
    return {
      playerName: '',
      password: '',
      confirmPwd: '',
      img: ''
    };
  },
  methods: {
        
    registro() {
      //console.log("Realizar Solicitud");
      // Verificar si las contraseñas coinciden
      let isPwdCorrect = this.password === this.confirmPwd;

      let isNameEmpty = this.name ==="";
      let isPwdEmpty = this.password === "";
      let isConfirmPwdEmpty = this.confirmPwd ==="";
      let isImgFileEmpty = this.imageFile ==="";

      if(isNameEmpty){
        alert("Campo de nombre vacio");
        return;
      }

      if(isPwdEmpty){
        alert("Campo de contraseña vacio");
        return;
      }

      if(isConfirmPwdEmpty){
        alert("Campo de confirmación contraseña vacio");
        return;
      }

      if(isImgFileEmpty){
        alert("Campo de imagen vacio");
        return;
      }
      
      // Si las contraseñas no coinciden, terminar la función aquí
      if (!isPwdCorrect) {
        console.log("Las contraseñas no coinciden");
        alert("Las contraseñas no coinciden");
        return;
      }
      
      // URL de la API a la que quieres enviar la solicitud POST
      const apiUrl = 'https://balandrau.salle.url.edu/i3/players';

      // Datos a enviar en la solicitud (player_ID, password y img)
      const datosSolicitud = {
        player_ID: this.playerName,
        password: this.password,
        img: this.img
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
          console.log(response.status)

          
          if (response.ok) {
            // Convertir la respuesta a JSON
            //alert("Usuario creado correctamente!!");
            this.$router.push({ name: 'loginPlayer' });
            return response.json();
          } else{
            alert("Error al crear Usuario, intentalo con otro nombre ");
          }
          throw new Error('La solicitud a la API falló');
        })
        .then(data => {
          console.log('Respuesta de la API:', data);

        })

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

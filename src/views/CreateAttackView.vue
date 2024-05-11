<template>
    <article class=" caja_createAttack">
      <h3 class="titelPage">Create Attack</h3>
      <form class="caja_gris form_centrado_izquierdo" @submit.prevent="createAttack">
        <section class="sectionAttack">
          <label for="name">Name</label>
          <input type="text" class="formlooks inputAttack" v-model="attackName"> 
        </section>
        <section class="sectionAttack">
          <label for="x">Coordinate X</label>
          <input type="text" class="formlookscoord inputAttack" v-model="xCoordinate">
        </section>
        <section class="sectionAttack">
          <label for="y">Coordinate Y</label>
          <input type="text" class="formlookscoord inputAttack" v-model="yCoordinate">
        </section>
        <section class="sectionAttack">
          <label for="image">img</label>
          <input type="text" class="formlookscoord inputAttack" v-model="image">
        </section>
        <section class="sectionButton">
          <button type="submit" class="btn success">Create</button>
        </section>
      </form>
    </article>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      attackName: '',
      xCoordinate: '',
      yCoordinate: '',
      image: ''
    };
  },
  methods: {
    createAttack() {
      console.log("Realizando solicitud de creado...");
      const token = localStorage.getItem("token");

      // Validar el formato de las coordenadas (x,y)
      const positionPattern = /^\(\d+,\d\)$/;
      const positions = `(${this.xCoordinate},${this.yCoordinate})`;

      if (!positionPattern.test(positions)) {
        alert('Las coordenadas deben seguir el formato (x,y).');
        return;
      }

      // Obtener los valores de x y y
      const [x, y] = positions.substring(1, positions.length - 1).split(',');

      // Validar que x sea un número positivo
      if (parseInt(x) <= 0 || isNaN(parseInt(x))) {
        alert('El valor de x debe ser un número positivo.');
        return;
      }

      // Validar que y sea un entero de un solo dígito
      if (parseInt(y) < 0 || parseInt(y) > 9 || isNaN(parseInt(y))) {
        alert('El valor de y debe ser un entero de un solo dígito.');
        return;
      }

      // Validar la longitud del nombre
      if (this.attackName.length >= 21) {
        alert('El nombre debe tener menos de 21 caracteres.');
        return;
      }
      const payload = {
        attack_ID: this.attackName,
        positions: positions,
        img: this.image 
      };
      const config = {
        headers: { 'Content-Type': 'application/json', 'Bearer': token, 'Authorization': `Bearer ${token}` }
      };
      
      const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks';

      axios.post(apiUrl, payload, config)
        .then(response => {
          console.log('Response:', response.data);
          alert("Attack created")
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
/*
  .marginmaker1{
    margin-top: 10%;
  }
  .marginmaker2{
    margin-top: 5%;
  }
  .flexaligner1{
    display: flex;
    flex-direction: center;
    justify-content: center;
    text-align: center;
  }
  .flexaligner2{
    display: flex;
    flex-direction: center;
    justify-content: center;
    text-align: center;
    margin-left: 3%;
  }
  .titlelooks {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .formlooks {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .formlookscoord {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .labellooks {
    margin-top: 10px;
  }
  .inputlooks {
    margin-top: 5px;
  }
  .buttonlooks {
    margin-top: 10px;
  }
*/
.sectionAttack{
  width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sectionButton{
  width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inputAttack{
  width: unset !important;
}
</style>
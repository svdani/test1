<template>
    <section style="">
        <button class="btn success btn-right" type="submit" @click="$router.push('/playerGameHistory')">View Player history</button>
        
        <article class="caja_gris" style="width: 95%;" >

            <img class="imagen-circular" src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" alt="Imagen cuadrada">
            
            <section style="width: 100%;">
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <h3>Name</h3>
                    <span style="color:#FFC700;font-size:25px;">17k $</span><!--<div class="caja_dinero"></div>-->
                </div>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <label for="lvl">Lvl</label>
                    <progress id="experience" max="100" value="70">70%</progress>
                </div>
            </section>
            
        </article>
    </section>
</template>

<script>
import axios from 'axios';

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

console.log("token ==" + token);

export default {
  data() {
    return {
      playerInfo: {} // Objeto donde almacenarás la información obtenida de la API
    };
  },

    mounted() {
        // URL de la API desde donde deseas obtener la información
        const apiUrl = 'https://balandrau.salle.url.edu/i3/player-info';

        // Realiza la solicitud GET a la API utilizando axios
        axios.get(apiUrl)
        .then(response => {
            // Verifica si la respuesta es exitosa (estado 200)
            if (response.status === 200) {
            // Almacena los datos obtenidos en playerInfo
            this.playerInfo = response.data;
            } else {
            // Si la respuesta no es exitosa, muestra un mensaje de error en la consola
            console.error('Error al obtener información del jugador:', response.statusText);
            }
        })
        .catch(error => {
            // Maneja cualquier error que ocurra durante la solicitud
            console.error('Error al realizar la solicitud:', error);
        });
    }
};
</script>
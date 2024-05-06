<template>
    <section style="">
        <button class="btn success btn-right" type="submit" @click="$router.push('/playerGameHistory')">View Player history</button>
        
        <article class="caja_gris" style="width: 95%;" >

            <img class="imagen-circular" :src="playerInfo ? playerInfo.img : 'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'" alt="Profile Image">
      
            <section style="width: 100%;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>{{ playerInfo ? playerInfo.player_ID : 'Name' }}</h3>
                    <span style="color:#FFC700; font-size:25px;">{{ playerInfo ? `${playerInfo.coins} $` : '' }}</span>
                </div>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <label for="lvl">Lv{{ playerInfo ? playerInfo.level : '0' }}</label>
                    <progress id="experience" max="100" value="70">70%</progress>
                </div>
            </section>
            
        </article>
    </section>
</template>

<script>
import axios from 'axios';



// URL de la API y token de autenticación


export default {
  data() {
    return {
      playerInfo: null // Inicializa playerInfo como null hasta que se carguen los datos
    };
  },
  mounted() {
    // URL de la API y token de autenticación
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const apiUrl = 'https://balandrau.salle.url.edu/i3/players/'+user;
    //const token = '1da5e60a-6c2f-4798-bc0e-144a63b7928b';
    console.log("token =", token)
    console.log("user =", user)
    console.log("apiUrl =", apiUrl)

    // Configuración de los encabezados de la solicitud
    const headers = {
      'Accept': 'application/json',
      'Bearer': `${token}`  // Incluye el token de autenticación como Bearer token
    };


    


    // Realiza la solicitud GET a la API utilizando Axios y los encabezados configurados
    axios.get(apiUrl, { headers })
      .then(response => {
        // Verifica si la respuesta es exitosa (estado 200)
        if (response.status === 200) {
          this.playerInfo = response.data; // Asigna la respuesta de la API a playerInfo
          console.log();
        } else {
          console.error('Error al obtener datos del jugador:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  }
};

</script>
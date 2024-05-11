<template>
    <header>
        <h3 class="titelPage">Buy Attacks</h3>
    </header>
    <main>
        <div class="caja_gris_buy_responsive caja_gris_joinable">
            
            <table class="border_table">
                <tr style="font-size: 150%;">
                    <th style="width: 22%;">Attack</th>
                    <th style="width: 22%;">Position</th>
                    <th style="width: 22%;">Power</th>
                    <th style="width: 22%;">Price</th>
                    <th style="width: 12%;"></th>

                </tr>

                <tr v-for="(attack, index) in filteredAttacklist" :key="index" class="cellTable" style="text-align: center;">
                    <td>{{ attack.attack_ID }}</td>
                    <td>{{ attack.positions }}</td>
                    <td>{{ attack.power }}</td>
                    <td>{{ attack.price }}$</td>

                    <td style="border: none;"><button class="btn-wide success btn-join" >Buy!</button></td>
                </tr> 
            </table>
        </div>
    </main>
    
</template>

<script>
import axios from 'axios';
  
  export default {
    data() {
      return {
        Attacklist: [], 
        filteredAttacklist: [] 
      };
    },
    created() {
      
      this.fetchPlayerData();
    },
    methods: {
      fetchPlayerData() {
        const token = localStorage.getItem("token");
        const apiUrl = 'https://balandrau.salle.url.edu/i3/shop/attacks';
  
        axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
          .then(response => {
            if (response.status === 200) {
                console.log(response.data);
                this.Attacklist= response.data;
                this.filteredAttacklist = [...this.Attacklist]; 
            } else {
              console.error('Error al obtener datos del jugador:', response.statusText);
            }
          })
          .catch(error => {
            console.error('Error al realizar la solicitud:', error);
          });
      },
      //Si se añade buscador
      //filterData(searchTerm) {
      //  if (!searchTerm) {
      //    this.filteredPlayerInfo = [...this.playerInfo]; // Mostrar todos los jugadores si no hay término de búsqueda
      //    return;
      //  }
      //  
      //  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
      //  this.filteredPlayerInfo = this.playerInfo.filter(player =>
      //    player.player_ID.toLowerCase().includes(normalizedSearchTerm)
      //  );
      //}
    }
  };
</script>

<!--
<template>
    <header>
        <h3 class="titelPage">Buy Attacks</h3>
    </header>
    <main>
        <div class="caja_gris caja_gris_joinable">
            
            <table>
            <tr>
                <th>Attack</th>
                <th>Position</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Kamehameha</td>
                <td>(0-1)</td>
                <td>2500</td>
                <td><button class="btn-small success btn-join">Buy!</button></td>
            </tr>
            <tr>
                <td>Genkidama</td>
                <td>(1-1)</td>
                <td>99999</td>
                <td><button class="btn-small success btn-join">Buy!</button></td>
            </tr>
            <tr>
                <td>Z Sword</td>
                <td>(1-0)</td>
                <td>300</td>
                <td><button class="btn-small success btn-join">Buy!</button></td>
            </tr>
            </table>
        </div>
    </main>

    
</template>
            
            

            <article style="display: flex; justify-content: space-between; padding-left: 25px; padding-right: 135px;">
                <h3>Attack</h3>
                <h3>Position</h3>
                <h3>Price</h3>
            </article>
            <article style="display: flex; align-items: center;">
                <section class="caja_blanca caja_blanca_buy_attack">
                    <p>Kamehameha</p>
                    <p>(0-1)</p>
                    <p>2500</p>
                </section>
                <button class="btn-small success btn-join">Buy!</button>
            </article>
            <article style="display: flex; align-items: center;">
                <section class="caja_blanca caja_blanca_buy_attack">
                    <p>Genkidama</p>
                    <p>(1-1)</p>
                    <p>99999</p>
                </section>
                <button class="btn-small success btn-join">Buy!</button>
            </article>
            <article style="display: flex; align-items: center;">
                <section class="caja_blanca caja_blanca_buy_attack">
                    <p>Z Sword</p>
                    <p>(1-0)</p>
                    <p>300</p>
                </section>
                <button class="btn-small success btn-join">Buy!</button>
            </article>
            -->
        
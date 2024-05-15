<template>
    <div class="caja_gris_available_games_responsive caja_gris_joinable">
        <div style="display: flex; justify-content: space-between;">
            <section class="left-align">
                <article style="display: flex;">
                    <div style="margin-top: 10px;">
                        <input type="text" id="site-search"/>
                    </div>
                    <button class="btn success btn-right">Search</button>
                </article>
            </section>
            
            
        <GameFilter />




        </div>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 1</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 2</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 3</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 4</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 5</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 6</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
    </div>

</template>

<style scoped> 

    .available_div_responsive {
    display: flex; 
    justify-content: space-between;
    
}


</style>
<!---->
<script>
import GameFilter from '@/components/GameFilter.vue';
import axios from 'axios';

export default {
    components: {
        GameFilter
    },
  data() {
    return {
      availableGames: [],
      joinableGames: [],
      inProgressGames: [],
    };
  },
  mounted() {
    this.fetchCurrentArenas();
  },
  methods: {
    fetchCurrentArenas() {
      const apiUrl = `https://balandrau.salle.url.edu/i3/players/arenas/current`;
      const token = localStorage.getItem("token");

      const headers = {
        'Accept': 'application/json',
        'Bearer': token
      };

      axios.get(apiUrl, { headers })
        .then(response => {
          if (response.status === 200) {
            // Assuming response.data contains the current arenas data
            console.log('Current Arenas Data:', response.data);

            // Filter available games
            this.availableGames = response.data.filter(game => !game.finished);

            if (this.joinableChecked) {
              this.joinableGames = this.availableGames.filter(game => !game.start);
            } else {
              this.joinableGames = [];
            }

            // Apply in-progress filter if checkbox is checked
            if (this.inProgressChecked) {
              this.inProgressGames = this.availableGames.filter(game => game.start);
            } else {
              this.inProgressGames = [];
            }

            // Filter joinable games
            this.joinableGames = this.availableGames.filter(game => !game.start);

            // Filter in-progress games
            this.inProgressGames = this.availableGames.filter(game => game.start);

            console.log('Available Games:', this.availableGames);
            console.log('Joinable Games:', this.joinableGames);
            console.log('In-progress Games:', this.inProgressGames);

          } else {
            console.error('Error fetching current arenas:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Error fetching current arenas:', error);
        });
    }
  }
}
</script>


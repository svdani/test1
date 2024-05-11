<template>
    <main style="display: flex; flex-direction: column;">
        <h3 style="margin: auto; color: white;">Backpack</h3>
        <section class="caja_gris caja_bagpack" style="width: 95%;">
            <ItemAttackBag v-for="(attack, index) in filteredAttacks" :key="index" :attack="attack" />
        </section>
    </main>
</template>

<script>
  import ItemAttackBag from './item-attack-bag.vue';
  import axios from 'axios';
  
  export default {
    name: 'App',
    components: {
        ItemAttackBag
    },
    data() {
        return {
            attackBag: [], // Lista de ataques mochila
        };
    },
    created() {
      this.fetchAttackPlayerData();
    },
    methods: {
        fetchAttackPlayerData() {
            console.log("Carga ataques mochila")
            const token = localStorage.getItem("token");
            const apiUrl = 'https://balandrau.salle.url.edu/i3/players/attacks';

            axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        this.attackBag = response.data; // Asigna los datos de los ataques a attackBag
                        this.filterAttacks(); // Filtra los ataques después de recibir los datos
          
                    } else {
                        console.error('Error al obtener datos del jugador:', response.statusText);
                    }
                })
                .catch(error => {
                console.error('Error al realizar la solicitud:', error);
                });
        },
        filterAttacks() {
            // Filtrar los ataques donde equipped es false
            this.filteredAttacks = this.attackBag.filter(attack => !attack.equipped);
        }
    }
};

  </script>
<template>
    <main style="display: flex;flex-direction: column;">
        <h3 style="margin: auto; color: white;">Equipment</h3>
        <section class="caja_gris caja_equipment" style="width: 95%;" >

            <ItemAttack v-for="(attack, index) in filteredAttacks" :key="index" :attack="attack" />
        
        </section>
    </main>
</template>

<script>
  import ItemAttack from './item-attack.vue';
  import axios from 'axios';
  
  export default {
    name: 'App',
    components: {
        ItemAttack
    },
    data() {
        return {
            attackEquip: [], // Lista de ataques equipados
        };
    },
    created() {
      this.fetchAttackPlayerData();
    },
    methods: {
        fetchAttackPlayerData() {
            console.log("Carga ataques equipados")
            const token = localStorage.getItem("token");
            const apiUrl = 'https://balandrau.salle.url.edu/i3/players/attacks';

            axios.get(apiUrl, { headers: { 'Accept': 'application/json', 'Bearer': token } })
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        this.attackEquip = response.data; // Asigna los datos de los ataques a attackBag
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
            // Filtrar los ataques donde equipped es true
            this.filteredAttacks = this.attackEquip.filter(attack => attack.equipped== true);
            console.log()
        }
    }
  }
  </script>
<template>
    <section class="caja_blanca" style="display: flex; flex-direction: column; align-items: flex-end;">
      <article style="display: flex; align-items: center;">
        <label for="joinable">Joinable</label>
        <input type="checkbox" id="joinable" v-model="localFilters.joinable" @change="emitFilters" />        <!-- Bind the checkbox to a data property and emit an event on change of status-->

      </article>
      <article style="display: flex; align-items: center;">
        <label for="inProgress">In Progress</label>
        <input type="checkbox" id="inProgress" v-model="localFilters.inProgress" @change="emitFilters" />        <!-- Bind the checkbox to a data property and emit an event on change of status-->

      </article>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        localFilters: {
          joinable: false,
          inProgress: false,
          finnished: false
        }
      };
    },
    /*methods: {
      emitFilters() {
        this.$emit('update-filters', this.localFilters); // Emit event with the current state of filter
       
      }

    }*/

    games: { // Espera un array de games que es passi com a prop
            type: Array,
            required: true
        }
        
    
  }
  </script>
  
<template>
    <section class="caja_blanca" style="display: flex; flex-direction: column; align-items: flex-end;">
      <article style="display: flex; align-items: center;">
        <label for="joinable">Joinable</label>
        <input type="checkbox" id="joinable" v-model="localFilters.joinable" @change="emitFilters" />
      </article>
      <article style="display: flex; align-items: center;">
        <label for="inProgress">In Progress</label>
        <input type="checkbox" id="inProgress" v-model="localFilters.inProgress" @change="emitFilters" />
      </article>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        localFilters: {
          joinable: false,
          inProgress: false
        }
      };
    },
    methods: {
      emitFilters() {
        this.$emit('update-filters', this.localFilters);
      }
    }
  }
  </script>
  
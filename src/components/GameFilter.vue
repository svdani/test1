<template>
    <section class="caja_blanca" style="display: flex; flex-direction: column; align-items: flex-end;">
      <article style="display: flex; align-items: center;">
        <label for="joinable">Joinable</label>
        <input type="checkbox" id="joinable" v-model="localFilters.joinable" @change="updateFilters('joinable')" />
      </article>
      <article style="display: flex; align-items: center;">
        <label for="inProgress">In Progress</label>
        <input type="checkbox" id="inProgress" v-model="localFilters.inProgress" @change="updateFilters('inProgress')" />
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
      updateFilters(changedFilter) {
        if (changedFilter === 'joinable') {
          this.localFilters.inProgress = false;
        } else if (changedFilter === 'inProgress') {
          this.localFilters.joinable = false;
        }
        this.emitFilters();
      },
      emitFilters() {
        this.$emit('update-filters', this.localFilters);
      }
    }
  }
  </script>
  
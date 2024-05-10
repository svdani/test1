<template>
  <form class="caja_ranking" @submit.prevent="searchPlayers">
    <input v-model="searchName" id="search-ranking" placeholder="Search name" type="text"/>
    <button type="submit" class="btn-small success"><span>Search!</span></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchName: ''
    };
  },
  methods: {
    searchPlayers() {
      // Emitir el evento 'search' con el término de búsqueda al componente padre (RankingManagementView)
      this.$emit('search', this.searchName.trim());
    }
  }
};
</script>

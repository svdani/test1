<template>
  <div>
    <h3 class="titelPage">Ranking</h3>
    <SearchBarRanking @search="handleSearch"/>
    <RankingList ref="rankingList"/>
  </div>
</template>

<script>
import SearchBarRanking from '../components/SearchBarRanking.vue';
import RankingList from '../components/RankingList.vue';

export default {
  components: {
    SearchBarRanking,
    RankingList
  },
  methods: {
    handleSearch(searchTerm) {
      // Pasar el término de búsqueda al RankingList para que realice el filtrado
      this.$refs.rankingList.filterData(searchTerm);
    }
  }
};
</script>
<template>
    <div>
      <input
        type="text"
        v-model="searchQuery"
        @input="emitSearchQuery"
        placeholder="Search games..."
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      emitSearchQuery() {
        this.$emit('update-search', this.searchQuery);
      }
    }
  }
  </script>
  
  <style scoped>
  input {
    padding: 0.5em;
    font-size: 1em;
  }
  </style>
  
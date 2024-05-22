<template>
    <section class="grey_box">
      <article class="flex-container">
        <section class="white-box">
          <p>Player Name</p>
          <p>{{ playerStats.name }}</p>
        </section>
        <section class="white-box">
          <p>Games</p>
          <p>{{ playerStats.games }}</p>
        </section>
        <section class="white-box">
          <p>Wins</p>
          <p class="green-text">{{ playerStats.wins }}</p>
        </section>
        <section class="white-box">
          <p>Losses</p>
          <p class="red-text">{{ playerStats.losses }}</p>
        </section>
      </article>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        playerStats: {},
        token: localStorage.getItem("token"),
        user: localStorage.getItem("user") 
      };
    },
    created() {
      this.fetchPlayerStatistics();
    },
    methods: {
      async fetchPlayerStatistics() {
        try {
          const playerId = this.user; // Replace with the actual player ID
          const response = await axios.get(`/players/${playerId}/statistics`);
          this.playerStats = {
            name: response.data.name, // Assuming the API returns a name field
            games: response.data.games, // Assuming the API returns a games field
            wins: response.data.wins, // Assuming the API returns a wins field
            losses: response.data.losses // Assuming the API returns a losses field
          };
        } catch (error) {
          console.error('Error fetching player statistics:', error);
        }
      }
    }
  };
  </script>
  
  
  <style>
  .grey_box {
    background-color: #ccc;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  .flex-container {
    display: flex;
    flex-wrap: wrap; /* Allows items to wrap as needed */
    gap: 20px; /* Creates space between items */
  }
  
  .white-box {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: black;
    flex: 1 1 200px; /* Flex grow, flex shrink, and flex basis */
  }
  
  .green-text {
    color: green;
  }
  
  .red-text {
    color: red;
  }
  </style>
  
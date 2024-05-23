<template>
    <div id="app">
      <header>
        <h3 class="titelPage">Arena Matches</h3>
      </header>
      <main>
        <div class="matches-list matches-container">
          <table class="matches-table">
            <thead>
              <tr>
                <th>ARENA</th>
                <th>WINNER</th>
                <th>DATE</th>
                <th>REWATCH</th>
              </tr>
            </thead>
            <tbody>
              <!-- Use v-for to loop through the match data -->
              <tr v-for="(match, index) in matches" :key="index">
                <td>{{ match.arena }}</td>
                <td>{{ match.winner }}</td>
                <td>{{ match.date }}</td>
                <td>
                  <button @click="rewatch(match)">Watch</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; 
  
  export default {
    data() {
      return {
        matches: [], // Initialize matches as an empty array
        token: localStorage.getItem("token"),
        user: localStorage.getItem("user") // Retrieve the user from localStorage
      };
    },
    created() {
      this.fetchPlayerStatistics();
    },
    methods: {
      async fetchPlayerStatistics() {
        try {
          const playerId = this.user; // Use the user value from data property
          const response = await axios.get(`/players/${playerId}/statistics`, {
            headers: { 'Authorization': `Bearer ${this.token}` } // Assuming you need to send the token in the header
          });
          this.matches = response.data.matches; // Assuming the API response has a matches array
        } catch (error) {
          console.error('Error fetching player statistics:', error);
        }
      },
      rewatch(match) {
        window.open(match.rewatch, '_blank');
      }
    }
  };
  </script>
  

<style>
  .matches-list {
    max-height: 400px; /* Set a maximum height for the list */
    overflow-y: auto; /* Enable vertical scrolling */
  }
  .matches-table {
    width: 100%;
    border-collapse: collapse;
  }
  .matches-table th,
  .matches-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  .matches-container {
    background-color: #f2f2f2; /* Gray background color */
    padding: 20px; /* Add padding for visual appeal */
    border-radius: 5px; /* Optional: Add border radius */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow */
    color: #333; /* Set text color to black */
  }
</style>

  
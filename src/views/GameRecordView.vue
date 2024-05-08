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
              <!-- Use v-for to loop through your match data -->
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
  export default {
    data() {
      return {
        matches: [
          { arena: 'Battlefield', winner: 'Player A', date: '2024-04-01', rewatch: 'link/to/rewatch1' },
          { arena: 'Arena of Heroes', winner: 'Player B', date: '2024-04-05', rewatch: 'link/to/rewatch2' },
          { arena: 'Colosseum', winner: 'Player C', date: '2024-04-10', rewatch: 'link/to/rewatch3' },
          // Add more matches as needed
        ]
      };
    },
    methods: {
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

  
<template>
    <div id="app">
      <header>
        <h3 class="titelPage">Sell Attacks</h3>
      </header>
      <main>
        <div class="caja_gris caja_sellattack">
          <div class="left-table">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Backpack</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b><i>Kamehame</i></b></td>
                  <td><b><i>3k</i></b></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="buttons-container">
            <button class="btn"><</button>
            <button class="btn">></button>
            <button class="btn"><<</button>
            <button class="btn">>></button> <!-- New button -->
          </div>
          <div class="right-table">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Store</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b><i>Genkidama</i></b></td>
                  <td><b><i>5k</i></b></td>
                </tr>
                <tr>
                  <td><b><i>Keizen</i></b></td>
                  <td><b><i>1k</i></b></td>
                </tr>
              </tbody>
            </table>
            <div class="coins">Coins: 27800</div> <!-- Coins text -->
          </div>
        </div>
        <div class="sell-container">
          <button class="big-btn">SELL</button> <!-- New big button -->
        </div>
      </main>
    </div>
  </template>
  
  <style>
    .caja_sellattack {
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin: 20px;
      display: flex;
      justify-content: space-between;
      position: relative; /* Ensure proper positioning of coins text */
    }
  
    .custom-table {
      width: 100%;
      border-collapse: collapse;
    }
  
    .custom-table th,
    .custom-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
  
    .custom-table th {
      background-color: #f2f2f2;
    }
  
    .left-table,
    .right-table {
      width: calc(50% - 10px); /* 50% width with 10px spacing between tables */
    }
  
    .buttons-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px; /* Adjusted margin */
    }
  
    .btn {
      padding: 5px 10px; /* Adjusted button size */
      background-color: orange;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin: 5px 0;
    }
  
    .btn:hover {
      background-color: #ff7f00;
    }
  
    .big-btn {
      padding: 15px 30px; /* Adjusted big button size */
      background-color: orange;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .big-btn:hover {
      background-color: #ff7f00;
    }
  
    .coins {
        position: absolute;
        top: -1px; /* Increased the top position */
        right: 10px;
    }

    .sell-container {
      display: flex;
      justify-content: center;
      margin-top: 20px; /* Adjusted margin */
    }
  </style>
  
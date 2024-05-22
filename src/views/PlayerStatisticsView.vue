<template>
    <section class="grey_box">
      <article class="flex-container">
        <section class="white-box">
          <p>Player Name</p>
          <p>a_player_name</p>
        </section>
        <section class="white-box">
          <p>Games</p>
          <p>24</p>
        </section>
        <section class="white-box">
          <p>Wins</p>
          <p class="green-text">21</p>
        </section>
        <section class="white-box">
          <p>Losses</p>
          <p class="red-text">3</p>
        </section>
      </article>
    </section>
  </template>
  
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
  
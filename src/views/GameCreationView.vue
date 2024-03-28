<template>
    <div id="app">
        <div class="container">
            <div class="input-group">
                <label for="columns">Number of Columns:</label>
                <input type="number" id="columns" min="1">
            </div>
            <div class="input-group">
                <label for="rows">Number of Rows:</label>
                <input type="number" id="rows" min="1">
            </div>
            <div class="input-group">
                <label for="playerHP">Player HP:</label>
                <input type="number" id="playerHP" min="1">
            </div>
            <button class="button" >Start Game</button>
        </div>
    </div>
</template>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .input-group {
        width: calc(33.33% - 20px); /* Adjust width here */
        margin-bottom: 15px;
    }
    .input-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .input-group input[type="number"] {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }
    .button {
        width: calc(100% - 20px); /* Adjust width here */
        padding: 10px;
        background-color: #a3a28c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
    }
</style>

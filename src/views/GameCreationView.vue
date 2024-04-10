<template>
        <main class="container">
            <form>
                <div class="input-group">
                <div class="bubble-box">Number of Columns:</div>
                <input type="text" id="columns">
                </div>
                <div class="input-group">
                <div class="bubble-box">Number of Rows:</div>
                <input type="text" id="rows">
                </div>
                <div class="input-group">
                    <div class="bubble-box">Player HP:</div>
                    <input type="text" id="playerHP">
                </div>
                <button class="button">Start Game</button>
            </form>
        </main>
</template>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 900px;
        margin: 20px auto;
        padding: 20px;
        border: none;
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
    .bubble-box {
        padding: 8px;
        background-color: #ccc;
        color: #333;
        border-radius: 5px;
        font-weight: bold;
        margin-right: 10px; /* Add space between the bubble and text */
        font-size: 14px; /* Adjust font size here */
    }
    .input-group label {
        display: block;
        margin-bottom: 5px;
    }
    .input-group input[type="text"] {
        width: calc(100% - 10px); /* Adjust width here */
        padding: 8px;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 5px; /* Add space between bubble and input box */
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

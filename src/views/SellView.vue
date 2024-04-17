<template>
    <div id="app">
        <header>
            <h3 class="titelPage">Sell Attacks</h3>
        </header>
        <main>
            <div class="flex-container">
                <div class="box">
                    <div class="box-content">
                        <span>Backpack</span>
                    </div>
                </div>
                <div class="box">
                    <div class="box-content">
                        <span>Store</span>
                    </div>
                </div>
            </div>
            <div class="flex-container center">
                <div class="formControl">
                    <input type="text" class="form-control" placeholder="Price">
                    <button type="submit" class="btn btn-orange">Submit</button>
                </div>
            </div>
        </main>
    </div>
</template>

<style>
    .flex-container {
        display: flex;
        justify-content: space-between; /* Align items with space between them */
        align-items: center;
        padding: 25px;
    }

    .center {
        justify-content: center; /* Center content horizontally */
    }

    .box {
        width: calc(50% - 20px); /* Adjust width for two boxes */
        background-color: #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .box-content {
        padding: 20px;
        text-align: center;
    }

    .formControl {
        margin: 10px; /* Add margin between input and button */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-control,
    .btn {
        margin-top: 5px; /* Add minimal space between input and button */
    }

    .btn-orange {
        background-color: orange;
        color: white;
    }
</style>

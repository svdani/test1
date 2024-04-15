<template>
    <div class="grey_box">
        <article class="flex-container">
            <div class="column">
                <div class="white-box">
                    <p>Player Name</p>
                </div>
                <div class="white-box">
                    <p>Games</p>
                </div>
                <div class="white-box">
                    <p>Wins</p>
                </div>
                <div class="white-box">
                    <p>Losses</p>
                </div>
            </div>
            <div class="column">
                <div class="white-box">
                    <p>a_player_name</p>
                </div>
                <div class="white-box">
                    <p>24</p>
                </div>
                <div class="white-box">
                    <p class="green-text">21</p>
                </div>
                <div class="white-box">
                    <p class="red-text">3</p>
                </div>
            </div>
        </article>
    </div>
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
    justify-content: space-between; /* Added to create more separation */
}

.column {
    flex: 1;
    margin-right: 20px; /* Added margin for separation */
}

.white-box {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: black; /* Changed font color to black */
}

.green-text {
    color: green;
}

.red-text {
    color: red;
}
</style>

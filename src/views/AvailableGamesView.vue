<template>
    <div class="caja_gris_available_games_responsive caja_gris_joinable">
        <div style="display: flex; justify-content: space-between;">
            <section class="left-align">
                <article style="display: flex;">
                    <div style="margin-top: 10px;">
                        <input type="text" id="site-search"/>
                    </div>
                    <button class="btn success btn-right">Search</button>
                </article>
            </section>
            <section class="caja_blanca" style="display: flex; flex-direction: column; align-items: flex-end;">
                <article style="display: flex; align-items: center;">
                    <label for="horns">Joinable</label>
                    <input type="checkbox" id="joinable"/>
                </article>
                <article style="display: flex; align-items: center;">
                    <label for="horns">In Progress</label>
                    <input type="checkbox" id="inProgress"/>
                </article>
            </section>
        </div>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 1</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 2</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 3</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 4</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 5</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
        <article style="display: flex; align-items: center;">
            <section class="caja_blanca caja_blanca_joinable" style="justify-content: space-between;">
                <p>Available Game 6</p>
                <button class="btn-small success btn-join">Join!</button>
            </section>
        </article>
    </div>

</template>

<style scoped> 

    .available_div_responsive {
    display: flex; 
    justify-content: space-between;
    
}


</style>
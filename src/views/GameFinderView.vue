<template>
    <section class="left-align">
        <article style="display: flex; justify-content: flex-end;">
            <div style="margin-top: 25px;">
                <input type="search" id="site-search"/>
            </div>
            <button class="btn success btn-right">Search</button>
        </article>
    </section>
    <section class="right-align">
        <article style="display: flex; justify-content: flex-end; align-items: center;">
            <label for="scales">Finished</label>
            <input type="checkbox" id="finished"/>
        </article>
        <article style="display: flex; justify-content: flex-end; align-items: center;">
            <label for="horns">Joinable</label>
            <input type="checkbox" id="joinable"/>
        </article>
        <article style="display: flex; justify-content: flex-end; align-items: center;">
            <label for="horns">In Progress</label>
            <input type="checkbox" id="inProgress"/>
        </article>
    </section>
    <div class="caja_gris" style="display: flex; flex-wrap: wrap;">
        <article  class="caja_blanca caja_blanca_finder">
            <section>
                <h3>Game</h3>
            </section>
        </article>
        <article  class="caja_blanca caja_blanca_finder">
            <section>
                <h3>Status</h3>
            </section>
        </article>
        <article  class="caja_blanca caja_blanca_finder">
            <section>
                <p>Game 1</p>
            </section>
        </article>
        <article  class="caja_blanca caja_blanca_finder">
            <section>
                <p>Joinable</p>
            </section>
        </article>
        <article class="caja_blanca caja_blanca_finder">
            <section>
                <p>Game 2</p>
            </section>
        </article>
        <article  class="caja_blanca caja_blanca_finder">
            <section>
                <p>In Progress</p>
            </section>
        </article>
        <article  class="caja_blanca caja_blanca_finder">
            <section>
                <p>Game 3</p>
            </section>
        </article>
        <article class="caja_blanca caja_blanca_finder">
            <section>
                <p>Finished</p>
            </section>
        </article>
    </div>
</template>
<style>
label {
  display: block;
}

input,
label {
  margin: 0.4rem 0;
}
p,
label {
  font:
    1rem 'Fira Sans',
    sans-serif;
}

input {
  margin: 0.4rem;
}
</style>
<template>
    <section>
        <label for="site-search">Search the site:</label>
        <input type="search" id="site-search" name="q" />
        <button>Search</button>
        <fieldset>
            <legend>Choose game status:</legend>
            <div>
                <input type="checkbox" id="scales" name="scales" checked />
                <label for="scales">Finished</label>
            </div>
            <div>
                <input type="checkbox" id="horns" name="horns" />
                <label for="horns">Joinable</label>
            </div>
            <div>
                <input type="checkbox" id="horns" name="horns" />
                <label for="horns">In Progress</label>
            </div>
        </fieldset>
    </section>
    <div class="caja_gris">
        <article class="caja_blanca">
            <p>Player Name:</p>
        </article>
        <article class="caja_blanca">
            <p>Name</p>
        </article>
        <article class="caja_blanca" >
            <p>Games:</p>
        </article>
        <article class="caja_blanca" >
            <p>20</p>
        </article>
        <article class="caja_blanca" >
            <p>Wins:</p>
        </article>
        <article class="caja_blanca" >
            <p>15</p>
        </article>
        <article class="caja_blanca" >
            <p>Losses:</p>
        </article>
        <article class="caja_blanca" >
            <p>5</p>
        </article>
    </div>
</template>
<style>
label {
  display: block;
  font:
    1rem 'Fira Sans',
    sans-serif;
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
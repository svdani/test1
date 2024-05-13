<template>
    <section class="left-align">
        <article class="search-bar">
            <div class="search-input">
                <input type="search" id="site-search"/>
            </div>
            <button class="btn success btn-right">Search</button>
        </article>
    </section>
    <section class="right-align">
        <article class="checkbox-group">
            <div class="checkbox-item">
                <label for="scales">Finished</label>
                <input type="checkbox" id="finished"/>
            </div>
            <div class="checkbox-item">
                <label for="horns">Joinable</label>
                <input type="checkbox" id="joinable"/>
            </div>
            <div class="checkbox-item">
                <label for="horns">In Progress</label>
                <input type="checkbox" id="inProgress"/>
            </div>
        </article>
    </section>
    <div class="caja_gris">
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
  font: 1rem 'Fira Sans', sans-serif;
}

input {
  margin: 0.4rem;
}

.search-bar,
.checkbox-group {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.checkbox-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.caja_gris {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .search-bar,
  .checkbox-group {
    justify-content: center;
  }
}
</style>

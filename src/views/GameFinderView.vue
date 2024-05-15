<template>
    <section class="left-align">
        <article class="search-bar">
            <input type="search" id="site-search"/>
            <button class="btn success btn-right">Search</button>
        </article>
    </section>
    <section class="right-align">
        <article class="checkbox-group">
            <label for="finished">
                <input type="checkbox" id="finished"/> Finished
            </label>
            <label for="joinable">
                <input type="checkbox" id="joinable"/> Joinable
            </label>
            <label for="inProgress">
                <input type="checkbox" id="inProgress"/> In Progress
            </label>
        </article>
    </section>
    <div class="caja_gris">
        <section class="caja_blanca caja_blanca_finder">
            <h3>Game</h3>
        </section>
        <section class="caja_blanca caja_blanca_finder">
            <h3>Status</h3>
        </section>
        <section class="caja_blanca caja_blanca_finder">
            <p>Game 1</p>
        </section>
        <section class="caja_blanca caja_blanca_finder">
            <p>Joinable</p>
        </section>
        <section class="caja_blanca caja_blanca_finder">
            <p>Game 2</p>
        </section>
        <section class="caja_blanca caja_blanca_finder">
            <p>In Progress</p>
        </section>
        <section class="caja_blanca caja_blanca_finder">
            <p>Game 3</p>
        </section>
        <section class="caja_blanca caja_blanca_finder">
            <p>Finished</p>
        </section>
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

.caja_gris {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .search-bar,
  .checkbox-group {
    justify-content: center;
  }

  .caja_gris {
    flex-direction: column;
  }

  .caja_blanca {
    width: 100%;
  }
}

</style>

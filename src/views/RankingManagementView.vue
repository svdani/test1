<template>
    <h3 class="titelPage">Ranking </h3>


    <form class="caja_ranking" action='/search' id='search-form' method='get' target='_top'>
        <input id='search-ranking'  placeholder='Search name' type='text'/>
        <button class="btn-small success" ><span>Search!</span></button>
    </form>

    <main class="caja_gris caja_ranking">
        <table>
            <tr class="bottom-border">
                <th style="width: 50%;">Name </th>
                <th style="width: 50%;">Lvl</th>
            </tr>
            <tr class="cellTable">
                <td>Peter</td>
                <td>11</td>
            </tr>
            <tr class="cellTable">
                <td>Lois</td>
                <td>12</td>
            </tr>
        </table>

    </main>
</template>

<style>
  /* Estilo para el borde inferior de la fila */
  .bottom-border {
    border-bottom: 2px solid black; /* 2px de ancho y sólido, puedes ajustar estos valores según necesites */
  }

  td{
    text-align: center;  
  }

  .cellTable{
    font-weight: normal;
  }

</style>
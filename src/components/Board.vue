<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="board">
      <div v-for="row in parseInt(numRows)" :key="row" class="row">
        <div v-for="col in parseInt(numCols)" :key="col" class="cell">
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        props: {
            numRows: {
            type: String,
            required: true
            },
            numCols: {
            type: String,
            required: true
            }
        }
    };
    </script>

    <style scoped>
    .board {
    display: flex;
    flex-direction: column;
    }

    .row {
    display: flex;
    }

    .cell {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    background-color: white;
    }
</style>
  
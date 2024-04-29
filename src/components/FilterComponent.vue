<template>
    <div class="caja_blanca" style="display: flex; flex-direction: column; align-items: flex-end;">
      <div style="display: flex; align-items: center;">
        <label for="joinable">Joinable</label>
        <input type="checkbox" id="joinable"/>
      </div>
      <div style="display: flex; align-items: center;">
        <label for="inProgress">In Progress</label>
        <input type="checkbox" id="inProgress"/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterComponent'
  }
  </script>
  
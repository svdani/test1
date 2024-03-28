<template>
    <header>
      <h1 class="titlelooks">Create Attack </h1>
      <form>
        <label for="name">Name</label>
        <input type="text" class="formlooks"> <br>
        <label for="x">X</label>
        <input type="text" class="formlookscoord">
        <br>
        <label for="y">Y</label>
        <input type="text" class="formlookscoord">
        <br>
        <button type="submit" class="buttonlooks">Create</button>
      </form>
    </header>
  </template>
  <style>
    .titlelooks {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    .formlooks {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .formlookscoord {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .labellooks {
      margin-top: 10px;
    }
    .inputlooks {
      margin-top: 5px;
    }
    .buttonlooks {
      margin-top: 10px;
    }
    </style>
<template>
    <article class=" caja_createAttack">
      <h3 class="titelPage">Create Attack</h3>
      <form class="caja_gris form_centrado_izquierdo">
        <div class="flexaligner1 marginmaker1">
          <label for="name">Name</label>
          <input type="text" class="formlooks"> 
        </div>
        <div class="flexaligner2 marginmaker2">
          <label for="x">X</label>
          <input type="text" class="formlookscoord">
        </div>
        <div class="flexaligner2 marginmaker2">
          <label for="y">Y</label>
          <input type="text" class="formlookscoord">
        </div>
        <div class="flexaligner2 marginmaker2">
          <button type="submit" class="btn success">Create</button>
        </div>
      </form>
    </article>
</template>
  <style>

    .marginmaker1{
      margin-top: 10%;
    }
    .marginmaker2{
      margin-top: 5%;
    }
    .flexaligner1{
      display: flex;
      flex-direction: center;
      justify-content: center;
      text-align: center;
    }
    .flexaligner2{
      display: flex;
      flex-direction: center;
      justify-content: center;
      text-align: center;
      margin-left: 3%;
    }

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
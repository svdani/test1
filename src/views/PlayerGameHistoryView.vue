<template>
    <div class="flexaligner2 marginmaker2">
      <button type="submit" class="btn success btn-right" @click="$router.push('/playerStatistics')">Statistics</button>
    </div>
    <div class="flexaligner2 marginmaker2">
      <button type="submit" class="buttonlooks btn success" @click="$router.push('/gameLogs')">Game Logs</button>
    </div>
    <div class="flexaligner2 marginmaker2">
      <button type="submit" class="buttonlooks btn success" @click="$router.push('/gameReplay')">Game Replay</button>
    </div>
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
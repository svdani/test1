<!-- src/App.vue -->
<template>
  <main >
    <DataPlayer/>
    <Equipment/>
    <BackPack/>
    <section style="display: flex;justify-content: center;">
        <button class="btn danger" click="">Borrar personaje</button>
    </section>
  </main>          
</template>
  
<script>
  import DataPlayer from '../components/DataPlayer.vue';
  import Equipment from '../components/Equipment.vue';
  import BackPack from '../components/BackPack.vue';

  export default {
    name: 'App',
    components: {
        DataPlayer,
        Equipment,
        BackPack
    }
  }
</script>

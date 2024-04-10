<!-- src/App.vue -->
<template>
        <main >
            <DataPlayer/>
            <Equipment/>

        </main>          
</template>
  
  <script>
  import DataPlayer from '../components/DataPlayer.vue';
  import Equipment from '../components/Equipment.vue';
  
  export default {
    name: 'App',
    components: {
        DataPlayer,
        Equipment
    }
  }
  </script>
  



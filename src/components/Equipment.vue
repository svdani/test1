<template>
    <main style="display: flex;flex-direction: column;">
        <h3 style="margin: auto; color: black;">Equipment</h3>
        <section class="caja_gris caja_equipment" style="width: 95%;" >

            <ItemAttack/>
            <ItemAttack/>
            <ItemAttack/>
        
        </section>
    </main>
</template>

<script>
  import ItemAttack from './item-attack.vue';

  
  export default {
    name: 'App',
    components: {
        ItemAttack
    }
  }
  </script>
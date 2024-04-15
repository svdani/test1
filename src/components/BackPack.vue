<template>
    <main style="display: flex;flex-direction: column;">
        <h3 style="margin: auto; color: black;">Equipment</h3>
        <section class="caja_gris caja_bagpack" style="width: 95%;" >

            <ItemAttackBag/>
            <ItemAttackBag/>
            <ItemAttackBag/>
            <ItemAttackBag/>
            <ItemAttackBag/>
            <ItemAttackBag/>
        
        </section>
    </main>
</template>

<script>
  import ItemAttackBag from './item-attack-bag.vue';

  
  export default {
    name: 'App',
    components: {
        ItemAttackBag
    }
  }
  </script>
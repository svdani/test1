<template>
    <article class="caja_blanca caja_vertical_center">
        <section style="display: block;">
            <h4><span class="tagLabel">Name: </span>{{ attack.attack_ID }}</h4>
            <h4><span class="tagLabel">X,Y: </span>{{ attack.positions }}</h4>
            <h4><span class="tagLabel">Power: </span>{{ attack.power }}</h4>
        </section>
        <button class="button_overlay" style="padding:4px;">
            <span class="material-symbols-outlined" style="font-size: xx-large;">
                close
            </span>
        </button>
        <img src="../assets/images/slash.jpg" class="img-attack">
        
    </article>
</template>

<script>
export default {
  props: {
    attack: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.tagLabel{
    color: grey;
}
</style>
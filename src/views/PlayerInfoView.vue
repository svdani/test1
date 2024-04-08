<script>
    function name() {
        alert("Hola???");
    }
</script>

<template>

    <button class="btn success" type="submit" onclick="alert('Hola???')">Create</button>
    <article class="caja_gris" >

        <img class="imagen-circular" src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" alt="Imagen cuadrada">
        
        <section style="width: 100%;">
            <h3>Name</h3>
            <label for="lvl">Lvl</label>

            <progress id="experience" max="100" value="70">70%</progress>
        </section>
    </article>
</template>


<style>

    progress {
        width: 80%;
        height: 3rem;
    }

    label {
        padding-right: 10px;
        font-size: 1rem;
    }

    .caja_gris{
        margin:1rem;
        padding: 1rem;
        border-radius: 10px;
        background-color: rgba(128, 128, 128, 0.5); 
        display: flex;

    }

    .imagen-circular {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
        border-radius: 50%;
    }


  </style>

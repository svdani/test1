<template>
    <section style="">
        <button class="btn success btn-right" type="submit" @click="$router.push('/playerGameHistory')">View Player history</button>
        
        <article class="caja_gris" style="width: 95%;" >

            <img class="imagen-circular" src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" alt="Imagen cuadrada">
            
            <section style="width: 100%;">
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <h3>Name</h3>
                    <span style="color:#FFC700;font-size:25px;">17k $</span><!--<div class="caja_dinero"></div>-->
                </div>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <label for="lvl">Lvl</label>
                    <progress id="experience" max="100" value="70">70%</progress>
                </div>
            </section>
            
        </article>
    </section>
</template>
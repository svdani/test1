<template>
    <header class="content">
        <h1>Player Creation</h1>
    </header>
    <main class="content">
        <flex class="flex-container">
            <flex class="formControl">
                <img src="@/assets/images/iconUser.png" alt="profile"/>
                <input type="file" class="form-control-file" id="imageFile">
            </flex>
        </flex>
        <flex class="flex-container">
            <flex class="formControl">
                <input type="text" class="form-control" placeholder="Player name">
            </flex>
        </flex>
    </main>
    <footer class="content">
        <flex class="flex-container">
            <flex class="formControl">
                <button type="submit" class="btn success">Submit</button>
            </flex>
        </flex>
    </footer>
</template>
<style>
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.formControl {
    margin: 10px;
}

.form-control, .form-control-file, .btn {
    margin-top: 10px;
}
.content{
    width: 100%;
    text-align: left;
    margin-top: 2%;
}
</style>

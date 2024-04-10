<template>
    <main class="content">
        <form>
            <div class="formControl">
                <input type="file" class="form-control-file" id="imageFile">
            </div>
            <div class="formControl">
                <input type="text" class="form-control" placeholder="Player name">
            </div>
            <div class="formControl">
                <button type="submit" class="btn success">Submit</button>
            </div>
        </form>
    </main>
</template>
<style>
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.formControl {
    margin: 10px;
    text-align: center;
}

.form-control, .form-control-file, .btn {
    margin-top: 10px;
    text-align: center;
}
.content{
    width: 100%;
    text-align: left;
    margin-top: 2%;
}
</style>

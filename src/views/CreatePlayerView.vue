<template>
    <header>
        <h1>Player Creation</h1>
    </header>
    <main>
        <div class="flex-container">
            <div class="formControl">
                <input type="file" class="form-control-file" id="imageFile">
            </div>
        </div>
        <div class="flex-container">
            <div class="formControl">
                <input type="text" class="form-control" placeholder="Player name">
            </div>
        </div>
    </main>
    <footer>
        <div class="flex-container">
            <div class="formControl">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </footer>
</template>
<style>
.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
}

.formControl {
    margin: 10px;
}

.form-control, .form-control-file, .btn {
    margin-top: 10px;
}
</style>

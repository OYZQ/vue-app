<template>
    <div class="header">
        <button class="home">首页</button>
        <h2 class="title">Movie</h2>
    </div>
</template>

<script>
    export default{

    }

</script>

<style scoped>
.header{
    height: 1rem;
    background-color:rgb(33,150,243);
    position: fixed;
    top: 0;
    width: 100%;
    line-height: 1rem;
}
.home{
    color:#fff;
}
.title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);color: #fff;
}
</style>
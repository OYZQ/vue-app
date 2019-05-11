<template>
    <ul class="footer">
        <li>电影</li>
        <li>音乐</li>
        <li>书籍</li>
        <li>图片</li>
    </ul>
</template>

<script>
    export default{

    }

</script>

<style scoped>
.footer{
    height: 1rem;
    background-color:rgb(33,150,243);
    position: fixed;
    bottom:0;
    width: 100%;
    display:flex;
    line-height: 1rem;
}

.footer li{
    flex-grow: 1;
    text-align: center;
    color: #fff;
}
</style>
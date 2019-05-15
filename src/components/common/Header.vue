<template>
    <div class="header" :style="{'background-color':bg}">
        <button class="home" @click="goHome">首页</button>
        <h2 class="title">
            <slot name="title">
                默认值
            </slot>
        </h2>
    </div>
</template>

<script>
    export default{
        methods:{
            goHome(){
                this.$router.push('/')
            }
        },
        props:['bg']
    }

</script>

<style scoped>
.header{
    height: 1rem;
    background-color:rgb(229,72,71);
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
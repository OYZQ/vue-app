<template>
    <div>
        <router-view></router-view>
        <common-header  bg="rgb(51,133,255)">
            <span slot="title">Photo</span>
        </common-header>
        <common-footer  bg="rgb(51,133,255)"></common-footer>
    </div>
</template>

<script>
    import CommonHeader from "../common/Header.vue"
    import CommonFooter from "../common/Footer.vue"
    export default{
        components: {
            CommonHeader,
            CommonFooter
        }
    }
</script>

<style scoped>

</style>
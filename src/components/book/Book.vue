<template>
    <div>
        <router-view></router-view>
        <common-header bg="rgb(121,85,72)">
            <span slot="title">Book</span>
        </common-header>

        <common-footer bg="rgb(121,85,72)"></common-footer>
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
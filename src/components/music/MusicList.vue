<template>
    <ul class="list">
        <li v-for="music in musicList" :key="music.dissid">
            <router-link :to="'/music/musicAlbums/' + music.dissid">
                <img :src="music.imgurl" alt="">
                <p class="dissname">{{music.dissname}}</p>
                <p class="name">{{music.creator.name}}</p>
                <p class="name">播放量：{{music.listennum}}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import Axios from "axios";
    export default{
        data(){
            return{
                musicList:[]
            }
        },
        mounted(){
            Axios.get('/static/data/musiclist.json').then((res)=>{
                console.log(res);
            this.musicList = res.data.data.list;
            });
        }
    }
</script>

<style scoped>
.list{
    margin: 1rem 0;
}
.list li{
    float: left;
    padding: 0.3rem 0 0.3rem 0.3rem;
    width: 44%;
}
.dissname{
    font-size:x-small;
    color: black;
}
.name{
    font-size: xx-small;
    color: rgb(153,153,153);
}
</style>
<template>
    <ul class="list">
        <div class="nav">
            <h3>为您推荐</h3>
        </div>
        <li v-for="photo in photoList" >
            <div class="content">
                <div class="left">
                    <img :src="photo.url1" alt="">
                    <div class="info_top">
                        <p class="name">{{ photo.name1 }}</p>
                        <p class="num font">{{ photo.num1 }}  <span>{{ photo.fs }}</span></p>
                        <h4>{{photo.logo}}</h4>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <img :src="photo.url2" alt="">
                    </div>
                    <div class="info">
                        <p class="name">{{ photo.name2 }}</p>
                        <p class="num">{{ photo.num2 }} <span>{{ photo.fs2 }}</span></p>
                    </div>
                </div>
            </div>
        </li>
        <li v-for="photo in photoList" :key="photo.id">
            <div class="content">
            <div class="right">
                <div>
                    <img :src="photo.url4" alt="">
                </div>
                <div class="info">
                    <p class="name">{{ photo.name4 }}</p>
                    <p class="num">{{ photo.num4 }} <span>{{ photo.fs4 }}</span></p>
                </div>
            </div>
            <div class="left">
                <img :src="photo.url3" alt="">
                <div class="info_top">
                    <p class="name">{{ photo.name3 }}</p>
                    <p class="num font">{{ photo.num3 }}  <span>{{ photo.f3 }}</span></p>
                    <h4>{{ photo.logo2 }}</h4>
                </div>
            </div>
        </div>
        </li>
    </ul>
</template>

<script>
    import Axios from "axios";
    export default{
        data(){
            return{
                photoList:[]
            }
        },
        mounted(){
            Axios.get('/static/data/photolist.json').then((res)=>{
                console.log(res);
            this.photoList = res.data.list;
        });
        }
    }
</script>

<style scoped>
    .nav h3{
        color: #999999;
        text-align:center;
        background-color: #FAFAFA;
        line-height: 1rem;
    }
    .list{
        margin: 1rem 0;
    }
    .content{
        display: flex;
        margin: 0.2rem;
        padding-top: 0.2rem;
        height: auto;
        text-align:left;
    }
    .content .left{
        flex-grow: 1;
        width: 0;
        margin-right: 0.1rem;
        margin-left: 0.1rem;
        height: auto;
        color: #444444;
        text-align: left;
        position: relative;
    }
    .content .left .info_top{
        position: relative;
        top: 0.7rem;
    }
    .content .left .info_top h4{
        color: rgb(211,211,211);
    }
    .content .left .font{
        color: #999999;
    }
    .content .right{
        flex-grow: 2;
        width: 0;
    }
    .content .right img{
        position: relative;
    }
    .content .right .info{
        position: absolute;
        top: -1.1rem;
        left: 0.5rem;
        color: #ffffff;
    }
    .name{
     font-weight: bolder;
    }
    .num{
        font-size: x-small;
        font-weight: bold;
    }
</style>
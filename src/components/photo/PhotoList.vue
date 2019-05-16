<template>
    <ul class="list">
        <div class="nav">
            <p>大家正在关注</p>
            <ul>
                <li class="nav_img1 img">
                    <p>520海报</p>
                </li>
                <li class="nav_img2 img">
                    <p>拼接壁纸</p>
                </li>
                <li class="nav_img3 img">
                    <p>世界建筑</p>
                </li>
                <li class="nav_img4 img">
                    <p>小黄脸</p>
                </li>
                <li class="nav_img5 img">
                    <p>老爷车</p>
                </li>
                <li class="nav_img6 img">
                    <p>工作室</p>
                </li>
            </ul>
        </div>
        <div class="nav">
            <p>为您推荐</p>
        </div>
        <li v-for="photo in photoList" >
            <div class="content">
                <div class="left">
                    <img :src="photo.url" alt="">
                    <div class="info_top">
                        <p class="name">{{ photo.name }}</p>
                        <p class="num font">{{ photo.num }}  <span>{{ photo.fs }}</span></p>
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
                    <img :src="photo.url2" alt="">
                </div>
                <div class="info">
                    <p class="name">{{ photo.name2 }}</p>
                    <p class="num">{{ photo.num2 }} <span>{{ photo.fs2 }}</span></p>
                </div>
            </div>
            <div class="left">
                <img :src="photo.url" alt="">
                <div class="info_top">
                    <p class="name">{{ photo.name }}</p>
                    <p class="num font">{{ photo.num }}  <span>{{ photo.fs }}</span></p>
                    <h4>{{ photo.logo }}</h4>
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
    .nav p{
        font-size: inherit;
        color: #999999;
        text-align:center;
        background-color: #FAFAFA;
        line-height: 1rem;
    }
    .nav ul li {
        float: left;
        width: 31.5%;
        margin: 0.1rem 0 0 0.1rem;
    }
    .nav .img p{
        background-size: cover;
        color: #ffffff;
    }
    .nav .nav_img1 p{
        background-image: url(https://hbimg.huabanimg.com/23cdda6daf089130921d574f5183b8fbf331e47624711-aRB9xK_sq236bl4);
    }
    .nav .nav_img2 p{
        background-image: url(https://hbimg.huabanimg.com/ed7e19729c02ae303e385ff93c98a5de00124cc1178013-tje7GY_sq236bl4);
    }
    .nav .nav_img3 p{
        background-image: url(https://hbimg.huabanimg.com/001ffe7c7c092ec86322743834d9e3ef2867eff533d17-GvOXOk_sq236bl4);
    }
    .nav .nav_img4 p{
        background-image: url(https://hbimg.huabanimg.com/384f0d098bbb58a18b723993aeda05ff6538d25b2a857-bJknUw_sq236bl4);
    }
    .nav .nav_img5 p{
        background-image: url(https://hbimg.huabanimg.com/78688e38a45d2ec025ca3d286b4f4c39cb60d009251ff-nNqKc1_sq236bl4);
    }
    .nav .nav_img6 p{
        background-image: url(https://hbimg.huabanimg.com/50ea3e9101bcd90844e92b6638ab643c032e1e611af56-K0J88l_sq236bl4);
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
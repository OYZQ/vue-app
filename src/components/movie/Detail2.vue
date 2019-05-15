<template>
    <div class="detail">
        <div class="detail-content">
            <div class="detail-img">
                <img :src="movie.img" alt="">
            </div>
            <div class="detail-info">
                <h3 v-text="movie.nm"></h3>
                <p class="enm">{{movie.enm}}</p>
                <h4 class="sc">{{movie.sc}} <span class="snum">（ {{movie.snum}}人评 ）</span></h4>
                <p class="enm">{{movie.cat}}</p>
                <p class="enm">{{movie.fra}}/{{movie.dur}}分钟</p>
                <p class="enm">{{movie.pubDesc}}</p>
            </div>
        </div>
        <div class="btn">
            <input type="button"value="特惠购票">
        </div>
        <div class="text">
            <p>{{movie.dra}}</p>
        </div>
        <div class="dir">
            <div>
                <img :src="movie.photos" alt="">
                <h6>{{movie.dir}}</h6>
                <p class="dy">导演</p>
            </div>
            <div>
                <img :src="movie.photos" alt="">
                <h6>{{movie.dir}}</h6>
                <p class="dy">导演</p>
            </div>
            <div>
                <img :src="movie.photos" alt="">
                <h6>{{movie.dir}}</h6>
                <p class="dy">导演</p>
            </div>
            <div>
                <img :src="movie.photos" alt="">
                <h6>{{movie.dir}}</h6>
                <p class="dy">导演</p>
            </div>

        </div>
    </div>
</template>

<script>
    import Axios from "axios"
    export default{
        data(){
            return{
                detail:{},
                movie:{}
            };
        },
        mounted(){
            let url1 = API_PROXY + 'http://m.maoyan.com/cinema/movie/'+ this.$route.params.movieId
            let url2 = '/static/data/moviedetail.json';
            Axios.get(url2).then((res)=>{
                console.log(res);
            this.detail = res.data.cinemas;
            this.movie = res.data.detailMovie;
            console.log(this.movie);
        })
        },
        methods:{
            next(){
                this.$router.push('/movie/MovieDetail2')
            }
        }
    }
</script>

<style scoped>
    .detail{
        margin: 1rem 0;
    }
    .detail-content{
        display: flex;
        background-color: rgb(132,139,152);
        padding: 0.3rem 0.3rem;
    }
    .detail-img{
        flex-grow: 1;
        width: 0;
        margin-right: 0.3rem;
    }
    .detail-info{
        flex-grow: 2.5;
        width: 0;
        color: #ffffff;
    }
    .detail ul{
        padding: 0 0.2rem;
    }
    .enm{
        font-weight: lighter;font-size: smaller;
        color: rgb(215,218,222);
    }
    .sc{
        color: rgb(255,204,0);
    }
    .snum{
        color: #ffffff;
        font-size: xx-small;
        font-weight: lighter;
    }
    .next h2{
        line-height: 163px;
        color: rgb(178,181,186);
    }
    .btn {
       margin: 0.2rem;
    }
    .btn input{
        cursor: pointer;
        font-size: 16px;
        padding: .13rem .24rem;
        display: inline-block;
        border-radius: 4px;
        line-height: 1;
        background: #e54847;
        color: #fff;
        width: 100%;
        border-radius:10px;
        border: 1px solid transparent;
    }
    .text{
        padding: 0.2rem;
        color: #555555;
        font-size: 15px;
        border-bottom: 15px solid rgb(244,244,244);
    }
    .dir{
        padding: 0.2rem;
        margin-bottom: 1rem;
        display: flex;
    }
    .dir div{
        margin: 0.2rem;
    }
    .dy{
        font-size:xx-small;
        font-weight: normal;
        color: rgb(153,153,153);
    }
</style>
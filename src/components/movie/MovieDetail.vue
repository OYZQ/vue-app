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
            <div class="next">
                <h2 @click="next">></h2>
            </div>
        </div>
       <ul>
           <li v-for="detail in detail" :key="detail.id" class="detail">
               <p class="nm">{{ detail.nm }} <span class="price">{{detail.sellPrice}}元起</span></p>
               <p class="addr">{{ detail.addr }}</p>
               <p class="distance">距离{{detail.distance}}</p>
               <p class="show">近期场次{{detail.showTimes}}</p>
           </li>
       </ul>
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
    /*padding: 0 0.2rem;*/
    border-bottom: 1px solid #ccc;
}
.nm{
    font-weight: bolder;
}
.addr{
    color: rgb(102,102,102);
    font-weight:normal;
}
.show{
    color: rgb(153,153,153);
    font-weight: lighter;
}
.price{
    color: rgb(241,61,55);
}
.distance{
    color: rgb(102,102,102);
    font-weight:normal;
}
.detail-content{
    display: flex;
    background-color: rgb(112,112,114);
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
</style>
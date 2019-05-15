<template>
    <div class="movie-list">
        <ul>
            <li @click="goDeatil(movie.id)" v-for="movie in moveList" :key="movie.id" class="movie">
                <!--<router-link to="/movie/movieDetail">-->
                    <div class="movie-img">
                        <img :src="movie.img" alt="">
                    </div>
                    <div class="movie-info">
                        <p class="movie-name">{{ movie.nm }}</p>
                        <p class="pingfeng"> 评分：{{ movie.sc }}</p>
                        <!--<p>上映日期：{{ movie.rt }}</p>-->
                        <p>主演：{{ movie.star }}</p>
                        <p>{{ movie.showInfo }}</p>
                    </div>
                <!--</router-link>-->
            </li>

        </ul>
        <div class="loading" v-show="loadingShow">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
        <div v-show="tip" class="tip">
            <h4>已经到底了^-^</h4>
        </div>
    </div>

</template>

<script>
    import Axios from 'axios'

    export default{
        data(){
            return {
                moveList: [],
                loadingShow: true,
                tip: false
            };
        },
        mounted(){
            this.loadData();
            //监听滚动条事件
            window.onscroll = () =>{
                let clientHeight = document.documentElement.clientHeight
                let scrollTop = document.documentElement.scrollTop
                let scrollHeight = document.documentElement.scrollHeight
                if (clientHeight + scrollTop == scrollHeight) {
                    console.log('到底了');
                    this.loadingShow = true;
                    if (!this.tip) {
                        this.loadData();
                    } else {
                        this.loadingShow = false;
                    }
                }
            }

        },
        methods: {
            loadData(){

                //远程接口不好用所以用本地的，url1是豆瓣的接口，url是猫眼接口,url2是猫眼接口数据
//            let url1 = API_PROXY + "https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&offset="+this.moveList.length
//            let url = API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000" + this.moveList.length
                let url2 = '/static/data/moviedata.json'
                Axios.get(url2)
                        .then((res) => {
                    console.log(res);
                this.loadingShow = false;
//            由于猫眼接口用不了，所以无奈采用假分页实现异步分页,但其实每次返回所以数据，通过slic函数从所有数据中截取所需数据
                let list = res.data.movieList;
                let data = list.slice(this.moveList.length, this.moveList.length + 7)
                this.moveList = this.moveList.concat(data);
                if (data.length < 7) {
                    this.tip = true
                }
            })
            .
                catch(() => {
                    alert('获取数据失败'
            )
            })
                ;
            },
            goDeatil(movieId){
                console.log(movieId);
                this.$router.push('/movie/movieDetail/'+ movieId)
            }
        }
    };
</script>

<style scoped>
    .movie-list {
        margin: 1rem 0;
    }

    .movie {
        display: flex;
        padding: 0.2rem;
        border-bottom: 1px solid #ccc;
    }

    .movie-img {
        flex-grow: 1;
        width: 0;
        margin-right: 0.2rem;
    }

    .movie-img img {
        width: 100%;
    }

    .movie-info {
        flex-grow: 3;
        width: 0;
    }

    .movie-name {
        font-weight: bolder;
    }

    .loading {
        text-align: center;
        /*display: block!important;*/
    }

    .tip {
        text-align: center;
    }

    .pingfeng {
        color: rgb(250, 175, 0);
    }
</style>
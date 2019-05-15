<template>
<div class="albums">
    <div class="albums-content">
        <div class="albums-img">
            <img src="https://p.qpic.cn/music_cover/R8unPZMA4Vp5v2Ms96bst32v6o80vMuV6vhefmusxxuRe6o8KrM8lA/600?n=1" alt="">
        </div>
        <div class="albums-info">
            <h4>那个微风的下午，街角的唱片店</h4>
            <p>念安娜</p>
            <h6>播放量：399.8万</h6>
        </div>
    </div>
    <a-player v-if="isShow" :autoplay="true" :showLrc="true" theme="rgb(63,55,49)" :music="songs" :list="list"></a-player>
    <div class="jianjie">
        <h3>歌单简介</h3>
        <p>
            那家街角的唱片店，那家店里得各种专辑往往都是吸引我的一大特色，每次路过，总要进去看上一会，我只是看，并不是买，单纯的为了享受在店里的氛围。大概老板已经认识我，所以每次见我去，总会唠叨几句，比方谁谁的MV不错，比方谁谁出的新歌不错。浅谈几句，老板的艺术气息依然让我乐此不疲的跟他唠叨某些音乐的可听性。<br/><br/>
            不同的人有不同的听歌习惯，我对歌曲的爱好是，喜欢一首歌就一直听，一直到听烦，或者下一首喜欢的歌出现为止。很有趣的现象产生了，很多歌曲我只是在固定的时间段喜欢，之后就很少再听。<br/>
            -----------------------------<br/>
            那个微风的午后，走进街角的唱片店，无意间遇见一个人，听到了一首歌<br/>
            结果是，你也爱上了这首歌！<br/>
            顺便，爱上听歌的那个人。<br/>
            几首歌，几段时光。跟我听歌吧！~<br/>
        </p>
    </div>
</div>
</template>

<script>
    import VueAplayer from 'vue-aplayer';
    import Axios from "axios";

    export default{
        data(){
            return {
                songs:{
                    "title": "孤独患者",
                    "artist": "陈奕迅",
                    "src": "http://m10.music.126.net/20190513204505/0100d36524ab43fe49bcf18fbedf0563/ymusic/dbc0/6141/a7e2/5d049d85c0784326e0e48726835ec652.mp3",
                    "pic": "/static/img/cyx.jpg",
                    "lrc":"[00:00.000] 作曲 : 方大同\n[00:01.000] 作词 : 小寒\n[00:16.940]欢笑声 欢呼声\n[00:21.320]炒热气氛 心却很冷\n[00:23.840]聚光灯 是种蒙恩\n[00:27.110]我却不能 喊等一等\n[00:30.940]我真佩服我 还能幽默\n[00:32.320]\n[00:34.140]掉眼泪时用笑掩过 怕人看破 顾虑好多\n[00:42.040]不谈寂寞 我们就都快活\n[00:46.810]\n[00:48.040]我不唱声嘶力竭的情歌\n[00:54.940]不表示没有心碎的时刻\n[01:01.650]我不曾摊开伤口任宰割 愈合就无人晓得\n[01:11.810]我内心挫折\n[01:16.020]活像个孤独患者 自我拉扯\n[01:23.740]外向的孤独患者 有何不可\n[01:28.940]\n[01:38.540]笑越大声 越是残忍\n[01:41.610]挤满体温 室温更冷\n[01:45.940]万一关灯 空虚扰人\n[01:48.740]我却不能 喊等一等\n[01:52.040]\n[01:53.570]你说你爱我 却一直说\n[01:57.240]说我不该窝在角落 策划逃脱 这也有错\n[02:04.360]连我脆弱 的权利都掠夺\n[02:09.620]\n[02:10.940]我不唱声嘶力竭的情歌\n[02:17.440]不表示没有心碎的时刻\n[02:24.750]我不曾摊开伤口任宰割 愈合就无人晓得\n[02:34.920]我内心挫折\n[02:38.610]活像个孤独患者自我拉扯\n[02:45.710]外向的孤独患者 有何不可\n[02:50.620]\n[03:21.350]我不要声嘶力竭的情歌\n[03:27.710]来提示我需要你的时刻\n[03:34.640]表面镇定并不是保护色 反而是要你懂得\n[03:45.540]我不知为何\n[03:48.770]活像个孤独患者 自我拉扯\n[03:55.940]外向的孤独患者 需要认可\n"
                },
                list:[],
                isShow:false
            }
        },
        components: {
            'a-player':VueAplayer
        },
        mounted(){
            Axios.get('/static/data/musicdata.json').then(res=>{
                console.log(res);
                let list = res.data.req_1.data.list;
                list.forEach(element => {
                    let obj = {
                        artist:element.artist,
                        lrc:element.lrc,
                        pic:element.pic,
                        src:element.src,
                        title:element.title
                    };
                this.list.push(obj);
            })
            this.isShow = true;
            }).catch()
        }
    }
</script>

<style scoped>
.albums{
    margin: 1rem 0;
}
.albums-content{
    display: flex;
    background-color: rgb(63,55,49);
    padding: 0.3rem 0.3rem;
}
.albums-img{
    flex-grow: 1;
    width: 0;
    margin-right: 0.3rem;
}
.albums-info{
    flex-grow: 1.5;
    width: 0;
    color: #ffffff;
}
.albums-info h6{
    font-weight: lighter;
}
.jianjie{
    color:#777777;
    padding: 0.25rem;
}
.jianjie h3{
    padding: 0 37%;
}
</style>
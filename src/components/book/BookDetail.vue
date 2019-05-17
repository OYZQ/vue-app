<template>
    <div>
        <div class="detail">
            <div class="top">
                <div class="mb">
                    <img src="https://img3.doubanio.com/f/freyr/139cdacc32f9fa8cf65b14ee80f131b8ac0f7ba7/pics/icon/logo_white.png" alt="">
                    <p class="p1">#阅无止境，一鹿相伴第二季#</p>
                    <p class="p2">传统艺术里的中国味道</p>
                </div>
            </div>
            <div class="center">
                <div class="left">
                    <p>117人参与</p>
                    <p>活动已结束</p>
                </div>
                <div class="right">
                    <input type="button" value="活动回顾">
                </div>
            </div>
            <div class="bottom">
                <p>豆瓣书店携手鹿晗愿望季，开启#阅无止境，一鹿相伴第二季#主题活动，第二期书单来袭！</p>
                <p></br></p>
                <p> 阅读没有止境，来一起寻找好书中的传统艺术之光吧。感受传统文化的亲切和温度，发现中国传统艺术的魅力，在本期豆瓣书店的愿望书单里，每一本书，就是打开一扇奇妙的艺术之门。</p>
                <p></br></p>
                <p class="weight">以下是本期#阅无止境，一鹿相伴第二季#书单活动攻略：</p>
                <p></br></p>
                <p>12月18日-12月24日，在豆瓣发布的#阅无止境，一鹿相伴第二季#书单中，找到你们感兴趣的书，阅读并点击进本书的图书条目页，为它写出精彩豆瓣书评（短评、长评不限）。</p>
                <p></br></p>
                <p>截图写下的豆瓣书评，把它发到豆瓣广播中并加上#阅无止境，一鹿相伴第二季#话题标签，即为参加成功！</p>
                <p></br></p>
                <p>豆瓣将会根据后台算法挑选出20位用户，随机送上本期书单中的图书一本（《艺术博物馆》除外）。</p>
                <p></br></p>
                <p class="weight">以下为豆瓣书店本期推荐书单：</p>
                <p>1.《丰子恺艺术四书》，北京日报出版社</p>
                <p>2.《如何写书法》，后浪</p>
                <p>3.《中国艺术》，世纪文景</p>
                <p>4.《山海兽》，中信</p>
                <p>5.《敦煌艺术入门十讲》，三联书店</p>
                <p>6.《艺术博物馆》，后浪</p>
                <p></br></p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .detail{
        margin: 1rem 0;
        background-color: #fff;
        width: 100%;
    }
    .detail .top{
        width: 100%;
        background-image:url(https://img1.doubanio.com/view/freyr_page_photo/raw/public/2287.jpg);
        width: 100%;
        background-size: cover;
    }
    .detail .top .mb{
        background-color: #000000;
        opacity: 0.3;
        /*z-index: 2*/
    }
    .detail .top p{
        text-align: center;
        color: #ffffff;
    }
    .detail .top .mb img{
        width: 64px;
        height: 17px;
        vertical-align: top;
        margin: 0.3rem;
    }
    .detail .top .mb .p1{
        font-size: 22px;
        margin-top: 0.4rem;
    }
    .detail .top .mb .p2{
        font-size: 17px;
        padding-bottom: 1rem;
    }
    .center{
        display: flex;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 0.5rem;
    }
    .center .left{
        flex-grow: 1;
        font-size: 13px;
        color: #333333;
        margin: 0.4rem;
    }
    .center .left p:before {
        content: "\e668";
    }
    .center .right{
        flex-grow: 1;
    }
    .center .right input{
        float: right;
        color: #9b9b9b;
        background-color: #fff;
        border-radius: 3px;
        padding: 9px 33px;
        border: 1px solid #ccc;
        margin: 0.4rem;
    }
    .bottom p{
        font-size: 15px;
        color: #494949;
        margin: 0 0.4rem;
    }
    .bottom .weight{
        font-weight:bolder;
    }
</style>
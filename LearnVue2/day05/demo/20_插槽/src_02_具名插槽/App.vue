<template>
    <div class="container">

        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="#">更多美食</a>
        </Category>

        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="Games" slot="footer">
                <a href="#">网络游戏</a>
                <a href="#">单机游戏</a>
            </div>
        </Category>

        <Category title="电影" :listData="films">
            <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
            <template v-slot:footer>
                <div class="Videos">
                    <a href="#">经典</a>
                    <a href="#">热门</a>
                    <a href="#">推荐</a>
                </div>
                <h4>欢迎来观看！</h4>
            </template>
        </Category>

    </div>
</template>

<script>
import Category from './components/Category'
export default {
    name:'App',
    components:{
        Category,
    },
    data() {
        return {
            foods:['火锅','烧烤','麻辣烫','牛排'],
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            films:['《教父》','《拆弹专家》','《你好，李欢迎》']
        }
    }
}
</script>

<style>
.container,.Games,.Videos{
    display:flex;
    justify-content:space-around;
}
h4{
    text-align:center;
}
</style>

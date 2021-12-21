<template>
    <div class="container">

        <Category title="游戏a">
            <template scope="game_a">
                <ul>
                    <li v-for="(g,index) in game_a.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏b">
            <template scope="game_b">
                <ol>
                    <li v-for="(g,index) in game_b.games" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏c">
            <template scope="game_c">
                <h4 v-for="(g,index) in game_c.games" :key="index">{{g}}</h4>
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

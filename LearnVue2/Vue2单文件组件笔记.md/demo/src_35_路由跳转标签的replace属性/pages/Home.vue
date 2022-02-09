<template>
    <div>
        <h2>Home组件的内容</h2>
        <ul class="nav nav-tabs">
            <li>
                <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link replace class="list-group-item " active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Home',
    // beforeDestroy(){
    //     console.log('Home组件即将被销毁了')
    // },
    mounted(){
        console.log('Home组件挂载完毕了',this)
    }
}
</script>

<style>

</style>
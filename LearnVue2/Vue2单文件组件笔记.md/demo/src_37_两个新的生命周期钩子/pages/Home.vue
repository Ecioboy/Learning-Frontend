<template>
    <div>
        <h2>Home组件的内容</h2>
        <ul class="nav nav-tabs">
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <!-- News为组件名
            多个缓存 :include="['','']"
         -->
        <keep-alive :include="['News']">
            <router-view></router-view>
        </keep-alive>

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
<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // beforeDestroy(){
    //     console.log('About组件即将被销毁了')
    // },
    mounted(){
        // console.log('About组件挂载完毕了',this)
    },
    // 通过路由进入该组件时被调用
    beforeRouteEnter(to, from, next){
        console.log('About--beforeRouteEnter',to,from)
        if(to.meta.isAuth){ //判断是否需要检权
            if(localStorage.getItem('school')==='vcal'){
                next()
            }else{
                alert('你没有权限！')
            }
        }else {
            next()
        }
    },
    // 通过路由离开该组件时被调用
    beforeRouteLeave(to, from, next){
        console.log('About--beforeRouteLeave',to,from)
        next()
    }

}
</script>

<style>

</style>
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>团队名：{{name}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据，方法...）
    export default {
        name:'Team',
        data(){
            return {
                name: 'VCaL'
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color:orange;
    }
</style>

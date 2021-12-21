<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据，方法...）
    export default {
        name:'Student',
        data(){
            return {
                name: 'Ecioboy',
                age: 18
            }
        }
    }
</script>

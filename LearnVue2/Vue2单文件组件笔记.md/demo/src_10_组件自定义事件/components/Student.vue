<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>当前求和为：{{number}}</h2>
      <button @click="add">点我number++</button>
      <button @click="sendStudentName">把学生名给App</button>
      <button @click="unbind">解绑vcal事件</button>
      <button @click="death">销毁当前Student组件的实例对象</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name: 'Ecioboy',
            sex: 'male',
            number:0
        }
    },
    methods: {
        // number自增长
        add(){
            console.log('add被调用了')
            this.number++
        },
        // 绑定自定义事件
        sendStudentName(){
            // 触发Student组件实例身上的vcal事件
            this.$emit('vcal',this.name)
            // this.$emit('demo')
        },
        // 解绑自定义事件
        unbind(){
            this.$off('vcal')   //解绑一个自定义事件
            // this.$off(['vcal','demo'])  //解绑多个自定义事件
            // this.$off() //解绑所有自定义事件
        },
        // 销毁Student组件实例对象
        death(){
            this.$destroy() //销毁了当前Student组件的实例对象,销毁后所有Student实例的自定义事件全都不奏效
        }
    }
}
</script>

<style scoped>
.student{
    background-color:orange
}
</style>
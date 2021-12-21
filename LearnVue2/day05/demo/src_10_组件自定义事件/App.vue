<template>
  <div class="app">
      <h1>{{msg}},学生姓名：{{studentName}}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"/>
      
      <hr>

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用v-on或@） -->
      <!-- <Student v-on:vcal="getStudentName" v-on:demo="m1"/> -->

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
      <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>

import Student from './components/Student'
import School from './components/School'

export default {
    name:'App',
    components:{
        Student,
        School,
    },
    data(){
        return {
            msg:'你好啊！',
            studentName:''
        }
    },
    methods: {
        getSchoolName(name){
            console.log('App收到了：',name)
        },
        getStudentName(name){
            console.log('App收到了：',name)
            this.studentName = name
        },
        m1(){
            console.log('demo被触发了')
        },
        show(){
            alert('123')
        }
    },
    
    mounted() {
        this.$refs.student.$on('vcal',this.getStudentName) //绑定自定义事件
        console.log(this.$refs.student)
    }

}
</script>

<style scoped>
.app{
    background-color:gray;
    padding:5px;
}
</style>
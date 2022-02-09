<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="btn" @click="showDom">点我输出msg</button>
      <School ref="sch"/>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School'

export default {
    name:'App',
    data(){
        return {
            msg:'欢迎加入VCaL'
        }
    },
    components:{
        School
    },
    methods:{
        showDom(){
            console.log(this.$refs.title)   // 真实DOM元素
            console.log(this.$refs.btn)     // 真实DOM元素
            console.log(this.$refs.sch)     // School组件的实例对象(vc)
        }
    }
}
</script>

<style>

</style>
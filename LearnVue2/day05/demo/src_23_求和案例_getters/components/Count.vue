<template>
  <div>
      <h1>当前求和为：{{sum}}</h1>
      <h3>当前求和放大10倍为：{{bigSum}}</h3>
      <h3>我在{{team}},学习{{subject}}</h3>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
// import {mapState} from 'vuex'

export default {
    name:'Count',
    data() {
        return {
            n:1,    //用户选择的数字
        }
    },
    computed:{
        sum(){
            return this.$store.state.sum
        },
        team(){
            return this.$store.state.team
        },
        subject(){
            return this.$store.state.subject
        },
        bigSum(){
            return this.$store.getters.bigSum
        },
    },
    methods: {
        increment(){
            this.$store.commit('J',this.n)
        },
        decrement(){
            this.$store.commit('JN',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('JOdd',this.n)
        },
        incrementWait(){
            setTimeout(()=>{
                this.$store.dispatch('JWait',this.n)
            },500)
        },
    },
}
</script>

<style scoped>
button{
    margin-left: 5px;
}
</style>

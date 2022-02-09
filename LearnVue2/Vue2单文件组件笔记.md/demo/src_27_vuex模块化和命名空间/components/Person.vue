<template>
  <div>
      <h1>Count组件的求和为：{{sum}}</h1>
      <h1>人员列表</h1>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return {
            name:''
        }
    },
    computed: {
        ...mapState('personAbout',['personList']),
        ...mapState('countAbout',['sum'])
    },
    methods: {
        add(){
            const person = {id:nanoid(),name:this.name}
            // console.log(person)
            this.$store.state.personAbout.personList.unshift(person)
            this.name = ''
        }
    }
}
</script>

<style>

</style>
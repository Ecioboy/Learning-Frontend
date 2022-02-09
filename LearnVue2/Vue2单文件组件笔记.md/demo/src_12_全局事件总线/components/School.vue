<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>

export default {
    name:'School',
    data(){
        return {
            name: 'VCaL',
            address: 'China'
        }
    },
    mounted() {
        // console.log('School：',this.$bus)
        this.$bus.$on('hello',(data)=>{
            console.log('School组件收到了数据：',data)
        })
    },
    beforeDestroy() {
        this.$bus.off('hello')
    }
}
</script>

<style scoped>
.school{
    background-color:skyblue;
    padding: 5px;
    margin-top:30px;
}
</style>
<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name: 'Ecioboy',
            sex: 'male',
        }
    },
    methods: {
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    },
    mounted(){
        // console.log('Student:',this.$bus)
    }
}
</script>

<style scoped>
.student{
    background-color:pink;
}
</style>
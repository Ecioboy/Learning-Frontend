<template>
  <div class="demo">
      <h2>学校姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name: 'Ecioboy',
            sex: 'male'
        }
    }
}
</script>

<style scoped>
.demo{
    background-color:orange
}
</style>
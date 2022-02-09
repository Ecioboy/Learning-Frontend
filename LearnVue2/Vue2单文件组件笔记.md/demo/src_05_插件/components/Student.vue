<template>
  <div>
      <h2>学校姓名：{{name | MySlice}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <input type="text" v-fbind:value="name">
      
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
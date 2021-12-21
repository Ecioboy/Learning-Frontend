<template>
  <div>
      <img src="./assets/logo.png" alt="">
      <Team></Team>
      <Student></Student>
  </div>
</template>

<script>

    // 引入组件
    import Student from './components/Student'
    import Team from './components/Team'

    export default {
        name:'App',
        components:{
            Team,
            Student
        }
    }
</script>

<style>

</style>
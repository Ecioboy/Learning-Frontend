<template>
  <div>
      <Team></Team>
      <Student></Student>
  </div>
</template>

<script>

    // 引入组件
    import Student from '../../../day04/vue/Student.vue'
    import Team from '../../../day04/vue/Team.vue'

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
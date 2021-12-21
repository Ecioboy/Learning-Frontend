<template>
  <div>
      <h2>学校名称：{{name}}</h2>
      <h2>学生地址：{{address}}</h2>
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
}
</script>
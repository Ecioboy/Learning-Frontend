<template>
  <div>
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学生地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入一个混入
import {mixin} from '../mixin'
export default {
    name:'School',
    data(){
        return {
            name: 'VCaL',
            address: 'China'
        }
    },
    mixins:[mixin]
}
</script>
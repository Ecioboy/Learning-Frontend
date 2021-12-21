<template>
  <div>
      <h2 @click="showName">学校姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'Student',
    data(){
        return {
            name: 'Ecio',
            sex: 'male'
        }
    },
    mixins:[mixin]
}
</script>
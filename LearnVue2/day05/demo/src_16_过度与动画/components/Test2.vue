<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group name="hello">
        <h1 v-show="!isShow" key="1">你好啊！</h1>
        <h1 v-show="isShow" key="2">你好啊！</h1>
      </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test2',
    data(){
      return {
        isShow:true
      }
    }
}
</script>

<style scoped>
  h1{
    background-color:orange;
  }

  /* 进入的起点 和 离开的终点 */
  .hello-enter,.hello-leave-to{
    transform:translate(-100%);
  }
  .hello-enter-active,.hello-leave-active{
    transition:0.5s linear;
  }
  /* 进入的终点 和 离开的起点 */
  .hello-enter-to,.hello-leave-{
    transform:translate(0);
  }

  

    /* 离开的起点 */
  /* .hello-leave{
    transform:translate(0);
  } */
  /* 离开的终点 */
  /* .hello-leave-to{
    transform:translate(-100%);
  }  */



</style>
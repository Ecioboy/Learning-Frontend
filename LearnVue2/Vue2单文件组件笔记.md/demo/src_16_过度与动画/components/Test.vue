<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name="hello">
        <h1 v-show="isShow">你好啊！</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
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

  .hello-enter-active{
    animation: vcal 1s;
  }

  .hello-leave-active{
    animation: vcal 1s reverse;
  }

  @keyframes vcal{
    from{
      transform: translate(-100%);
    }
    to{
      transform: translate(0px);
    }
  }
</style>
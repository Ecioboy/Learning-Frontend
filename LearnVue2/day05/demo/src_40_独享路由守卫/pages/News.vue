<template>
    <ul>
        <li :style="{opacity}">学习Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    data() {
        return {
            opacity:1
        }
    },
    /*
    mounted() {
        this.timer = setInterval(()=>{
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        },16)
    },*/
    /*
    beforeDestroy(){
        clearInterval(this.timer)
    }*/
    activated(){
        this.timer = setInterval(()=>{
            // console.log("activated")
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        },16)
    },
    deactivated(){
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>
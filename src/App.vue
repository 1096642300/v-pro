<template>
  <div id="app">
    <AppHeader></AppHeader>
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">

</style>

<script>
import AppHeader from "@/components/Header"
export default {
  components:{
    AppHeader
  },
  created(){
    //刷新url地址栏，直接回到首页
    this.$router.push("/")
    //调用actions里面的initCars
    this.$store.dispatch("initCars")
  }
}
</script>

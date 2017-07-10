<template>
  <div id="app">
    <MHeader></MHeader>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header.vue'
  import Tab from './components/tab/tab'
  import Player from './components/player/player'

  export default {
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div id="app">
    <MHeader></MHeader>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header.vue'
  import Tab from './components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="m-header">
    <div class="icon">
      <img src="static/logo2.png"/>
    </div>
    <router-link to="/user" tag="div" class="mine">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .m-header
    position: relative
    height: 56px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon img
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 150px
      height: 47px
    .mine
      position: absolute
      top: 8px
      right: 2px
      .icon-mine
        display: block
        padding: 12px
        font-size: 18px
        color: $color-theme
</style>

<template>
  <li class="item_music">
    <a href="javascript:;" class="list_main">
      <div class="list_media">
        <img :src="data.picUrl" class="item_img"/>
        <span class="icon_play"></span>
      </div>
      <div class="media_info">
        <h3 class="list_tit">{{data.Ftitle}}</h3>
      </div>
    </a>
  </li>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['data'],
    data(){
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item_music
    float: left
    width: 50%
    -webkit-box-sizing: border-box
    padding-right: 8px
    margin-bottom: 10px
    overflow: hidden
    .list_main
      display: block
      .list_media
        position: relative
        margin-bottom: 5px
        &:before
          content: ""
          display: block
          padding-top: 100%
        .item_img
          position: absolute
          top: 0
          left: 0
          display: block
          width: 100%
          z-index: 1
        .icon_play
          height: 24px
          bottom: 5px
          right: 5px
          width: 24px
          background-position: 0 0
          background-image: url("../../../static/list_sprite.png")
          background-repeat: no-repeat
          background-size: 24px 60px
          position: absolute
          display: block
          z-index: 10
        .listen_count
          left: 5px
          bottom: 7px
          display: block
          line-height: 12px
          color: #fff
          position: absolute
          z-index: 10
          .icon_listen
            display: block
            float: left
            width: 10px
            height: 10px
            background-position: 0 -50px
            margin-right: 5px
            background-image: url("../../../static/list_sprite.png")
            background-repeat: no-repeat
            background-size: 24px 60px
      .media_info
        text-align: center
        color: #fff
        .list_tit
          height: 26px
          line-height: 18px
          white-space: normal
          word-wrap: break-word
          font-size 14px
          overflow: hidden
          text-overflow: ellipsis
</style>

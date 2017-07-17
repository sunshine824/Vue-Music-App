<template>
  <li class="item_music" @click="selectItem(data)">
    <a href="javascript:;" class="list_main">
      <div class="list_media">
        <img v-lazy="data.imgurl" class="item_img"/>
        <span class="icon_play"></span>
        <span class="listen_count">
          <i class="icon_listen"></i>
          {{(data.listennum / 10000).toFixed(2)}}万
        </span>
      </div>
      <div class="media_info">
        <h3 class="list_tit">{{data.dissname}}</h3>
        <p class="list_text">{{data.creator.name}}</p>
      </div>
    </a>
  </li>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'

  export default{
    props: ['data'],
    data(){
      return {}
    },
    methods: {
      selectItem(data){
        this.$router.push({
          path: `/recommend/${data.dissid}`
        })
        this.setDisc(data)
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
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
          font-size: 12px
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
          line-height: 18px
          word-wrap: break-word
          font-size 14px
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .list_text
          font-size: 12px
          word-wrap: break-word
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          line-height: 26px
</style>

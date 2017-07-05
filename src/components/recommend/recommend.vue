<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider :data="slider ? slider : ''"></slider>
      </div>
      <div class="radio-list">
        <h1 class="list-title">电台推荐</h1>
        <ul class="radio_wrapper">
          <radioItem v-for="(item,index) in radioList" key="index" :data="item"></radioItem>
        </ul>
      </div>
      <div class="radio-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul class="radio_wrapper">
          <songItem v-for="(item,index) in discList" key="index" :data="item"></songItem>
        </ul>
      </div>
    </div>
    <div class="loading-container" v-show="!discList.length">
      <loading :title="loading_text"></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend, getDiscList} from '../../api/recommend'
  import {ERR_OK} from '../../api/config'
  import Slider from '../../base/slider/slider'
  import radioItem from '../radio-item/item'
  import songItem from '../song-list-item/item'
  import Loading from '../../base/loading/loading'

  export default {
    data(){
      return {
        slider: [],
        radioList: [],
        discList: [],
        loading_text:'正在加载...'
      }
    },
    components: {
      slider: Slider,
      radioItem: radioItem,
      songItem:songItem,
      loading:Loading
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data)
            this.slider = res.data.slider
            this.radioList = res.data.radioList
          }
        })
      },
      _getDiscList(){
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    width: 100%
    top: 100px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
        padding-top: 40%
      .radio-list
        margin-left: 10px
        margin-right: 10px
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .radio_wrapper
          overflow: hidden
          margin-right: -8px
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>

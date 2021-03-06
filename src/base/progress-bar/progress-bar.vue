<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper"
           ref="progressBtn"
           @touchstart.prevent="progressTouchStart"
           @touchmove.prevent="progressTouchMove"
           @touchend="progressTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {prefixStyle} from '../../common/js/dom'
  import {mapGetters} from 'vuex'

  const progressBtnWidth = 16
  const transform = prefixStyle('transform')

  export default{
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        touch: {},
        barWidth: 0
      }
    },
    computed: {
      ...mapGetters([
        'fullScreen'
      ])
    },
    methods: {
      progressTouchStart(e){
        this.touch.initiated = true
        this.touch.startX = e.touches[0].pageX
        this.touch.left = this.$refs.progress.clientWidth
      },
      progressTouchMove(e){
        if (!this.touch.initiated) {
          return
        }
        const deltaX = e.touches[0].pageX - this.touch.startX
        const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
        this.offset(offsetWidth)
      },
      progressTouchEnd(e){
        this.touch.initiated = false
        this.triggerPercent()
      },
      triggerPercent(){
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const percent = this.$refs.progress.clientWidth / barWidth
        this.$emit('percentChange', percent)
      },
      progressClick(e){
        const rect = this.$refs.progressBar.getBoundingClientRect()
        const offsetWidth = e.pageX - rect.left
        this.offset(offsetWidth)
        //这里当我们点击progressBtn的时候，e.offsetX获取不对
        //this.offset(e.offsetX)
        this.triggerPercent()
      },
      offset(offsetWidth){
        //进度条位置
        this.$refs.progress.style.width = `${offsetWidth}px`
        //进度条小球位置
        this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      }
    },
    watch: {
      percent(newPercent){
        if (newPercent >= 0 && !this.touch.initiated) {
          if(!this.fullScreen){
              return
          }
          const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
          const offsetWidth = newPercent * barWidth
          //console.log(offsetWidth)
          this.offset(offsetWidth)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0, 0, 0, 0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>

<template>
  <swipe class="my-swipe" :speed="900" :auto="3000">
    <swipe-item v-for="(item,index) in data" key="index">
      <a :href="item.linkUrl">
        <img :src="item.picUrl" @load="loadImageItem" class="needsclick"/>
      </a>
    </swipe-item>
  </swipe>
</template>

<script type="text/ecmascript-6">
  require('vue-swipe/dist/vue-swipe.css');
  import {Swipe, SwipeItem} from 'vue-swipe'

  export default{
    props: {
      data: {
        type: Array,
        default: []
      },
      loadImage: {
        type: Function
      }
    },
    data(){
      return {}
    },
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    methods:{
      loadImageItem(){
          this.loadImage()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .my-swipe {
    height: 100%;
    color: #fff;
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .my-swipe img {
    width: 100%;
  }

</style>

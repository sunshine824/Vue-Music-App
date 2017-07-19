<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query">
      <div class="shortcut">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li @click="addQuery(item.k)" v-for="(item,index) in hotKey" class="item">
              <span>{{item.k}}</span>
            </li>
          </ul>
        </div>
        <div class="search-history" v-show="searchHistory.length">
          <h1 class="title">
            <span class="text">搜索历史</span>
            <span class="clear">
              <i class="icon-clear"></i>
            </span>
          </h1>
          <search-history-list :searches="searchHistory"></search-history-list>
        </div>
      </div>
    </div>
    <div class="search-result" v-show="query">
      <suggest @select="saveSearch" :query="query" @listScroll="blurInput"></suggest>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from '../../base/search-box/search-box'
  import {getHotList} from '../../api/search'
  import {ERR_OK} from '../../api/config'
  import Suggest from '../suggest/suggest'
  import {mapActions,mapGetters} from 'vuex'
  import searchHistoryList from '../../base/search-history-list/search-history-list'

  export default{
    components: {
      SearchBox,
      Suggest,
      searchHistoryList
    },
    data(){
      return {
        hotKey: [],
        query: ''
      }
    },
    created(){
      this._getHotList()
    },
    computed:{
      ...mapGetters([
        'searchHistory'
      ])
    },
    methods: {
      saveSearch(){
        this.saveSearchHistory(this.query)
      },
      blurInput(){
        this.$refs.searchBox.blur()
      },
      onQueryChange(query){
        this.query = query
      },
      _getHotList(){
        getHotList().then(res => {
          if (res.code === ERR_OK) {
            this.hotKey = res.data.hotkey.slice(0, 10)
          }
        })
      },
      addQuery(query){
        console.log(query)
        this.$refs.searchBox.setQuery(query)
      },
      ...mapActions([
        'saveSearchHistory'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>

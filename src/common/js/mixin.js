/**
 * Created by Gatsby on 2017/7/13.
 */
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {playMode} from '../../common/js/config'
import {shuffle} from '../../common/js/util'

export const playListMixin = {
  computed: {
    ...mapGetters([
      'playList'
    ])
  },
  mounted(){
    this.handlePlayList(this.playList)
  },
  activated(){
    this.handlePlayList(this.playList)
  },
  watch: {
    playList(newVal){
      this.handlePlayList(newVal)
    }
  },
  methods: {
    handlePlayList(){
      throw new Error('component must implement handlePlayList method')
    }
  }
}

export const playerMixin = {
  computed: {
    ...mapGetters([
      'sequenceList',
      'currentSong',
      'playList',
      'mode'
    ]),
    iconMode(){
      return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
    },
  },
  methods: {
    changeMode(){
      const mode = this.mode + 1 < 3 ? this.mode + 1 : 0
      this.setPlayMode(mode)
      let list = null
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList) //打乱顺序
      } else {
        list = this.sequenceList
      }
      this.resetCurrentIndex(list)
      this.setPlayList(list)
    },
    resetCurrentIndex(list){
      let index = list.findIndex((item) => {
        return item.id === this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    ...mapMutations({
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayMode: 'SET_MODE',
      setPlayList: 'SET_PLAYLIST'
    })
  }
}

export const searchMixin = {
  data(){
    return {
      query: '',
      refreshDelay:100
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory',
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
    addQuery(query){
      this.$refs.searchBox.setQuery(query)
    },
    deleteAll(){
      this.clearSearchHistory()
    },
    deleteOne(item){
      this.deleteSearchHistory(item)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
    ])
  }
}

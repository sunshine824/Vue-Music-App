/**
 * Created by Gatsby on 2017/7/6.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer){
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag){
    state.playing = flag
  },
  [types.SET_FULL_SCRREN](state, flag){
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list){
    state.playList = list
  },
  [types.SET_SEQUENCE_LIST](state, list){
    state.sequenceList = list
  },
  [types.SET_MODE](state, mode){
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index){
    state.currentIndex = index
  },
  [types.SET_DISC](state, disc){
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList){
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORY](state, history){
    state.searchHistory = history
  },
  [types.SET_PLAYHISTROY](state, history){
    state.playHistroy = history
  }
}

export default mutations

/**
 * Created by Gatsby on 2017/7/6.
 */
import {playMode} from '../common/js/config'
import {loadSearch} from '../common/js/cache'

const state = {
  singer: {},
  playing: false,  //控制音乐播放暂停
  fullScreen: false, //全屏
  playList: [], //播放列表
  sequenceList: [],//播放顺序列表
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch()
}

export default state

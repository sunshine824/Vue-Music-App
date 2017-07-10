/**
 * Created by Gatsby on 2017/7/6.
 */
import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCRREN, true)
  commit(types.SET_PLAYING_STATE, true)
}

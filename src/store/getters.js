/**
 * Created by Gatsby on 2017/7/6.
 */
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const sequenceList = state => state.sequenceList

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistroy

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}

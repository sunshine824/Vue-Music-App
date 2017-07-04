/**
 * Created by Gatsby on 2017/7/4.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

//抓取QQ音乐轮播数据
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    uin: 0
  })
  return jsonp(url, data, options)
}

//抓取QQ音乐歌单数据
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    rnd:Math.random(),
    loginUin:0,
    hostUin:0,
    platform:'yqq',
    needNewCode:0,
    categoryId:10000000,
    sortId:5,
    sin:0,
    ein:29,
    format:'json',
    jsonpCallback:'getPlaylist'
  })

  return axios.get(url,{
    params:data
  }).then((res)=>{
    return Promise.resolve(res.data)
  })
}

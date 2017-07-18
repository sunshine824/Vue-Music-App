/**
 * Created by Gatsby on 2017/7/18.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getHotList() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'jsonp',
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getSearchList(w) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'jsonp',
    platform: 'h5',
    needNewCode: 1,
    w: w,
    zhidaqu: 1,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    p: 1,
    remoteplace: 'txt.mqq.all'
  })

  return jsonp(url, data, options)
}

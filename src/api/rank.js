/**
 * Created by Gatsby on 2017/7/17.
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'jsonp',
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

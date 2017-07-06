/**
 * Created by Gatsby on 2017/7/5.
 */
export default class Singer {
  constructor({id, name, mid}) {
    this.id = id
    this.name = name
    this.mid = mid
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${mid}.jpg?max_age=2592000`
  }
}

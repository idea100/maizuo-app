import fetch from '@/config/fetch'

// 获取轮播图片
const fetchImages = () => fetch('GET', 'v4/api/billboard/home')

// 获取当前热映 默认取五条数据
const fetchNowPlaying = (data = {page: 1, count: 5}) => fetch('GET', 'v4/api/film/now-playing', data)

// 获取即将上映的电影列表，默认展示3条
const fetchComingSoon = (data = {page: 1, count: 3}) => fetch('GET', 'v4/api/film/coming-soon', data)

// 获取城市列表
const fetchCitys = () => fetch('GET', 'v4/api/city')

// 设置所在城市的ID
const postCityId = (id) => fetch('POST', `v4/api/city/${id}`)

// 获取登陆接口
const postLoginId = data => fetch('POST', 'v4/api/login', data)

// 发送登录验证码
const postCodeing = data => fetch('POST', 'v4/api/code', data)

// exports
export {
  fetchImages,
  fetchNowPlaying,
  fetchComingSoon,
  fetchCitys,
  postCityId,
  postLoginId,
  postCodeing
}

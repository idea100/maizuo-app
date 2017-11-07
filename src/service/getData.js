import fetch from 'config/fetch'

// 获取轮播图片
export const fetchImages = () => fetch('GET', 'v4/api/billboard/home')

// 获取当前热映 默认取五条数据
export const fetchNowPlaying = (data = {page: 1, count: 5}) => fetch('GET', 'v4/api/film/now-playing', data)

// 获取即将上映的电影列表，默认展示3条
export const fetchComingSoon = (data = {page: 1, count: 3}) => fetch('GET', 'v4/api/film/coming-soon', data)

// 获取城市列表
export const fetchCitys = () => fetch('GET', 'v4/api/city')

// 设置所在城市的ID
export const postCityId = id => fetch('POST', `v4/api/city/${id}`)

// 获取登陆接口
export const postLogin = data => fetch('POST', 'v4/api/login', data)

// 发送登录验证码
export const fetchVerifyCode = (mobile = '', type = '2') => fetch('POST', 'v4/api/code', { mobile, type })

// 获取用户信息
export const fetchUserInfo = () => fetch('GET', 'v4/api/me')

// 注销登录
export const fetchLogout = () => fetch('POST', 'v4/api/logout')

// 获取全部影院
export const fetchCinemas = () => fetch('GET', 'v4/api/cinema')

// 获取影院详情
export const fetchCinemaDetail = id => fetch('GET', `v4/api/cinema/${id}`)

import fetch from '@/config/fetch'

// 获取轮播图片
const fetchImages = () => fetch('GET', 'v4/api/billboard/home')

// 获取当前热映 默认取五条数据
const fetchNowPlaying = (data = {page: 1, count: 5}) => fetch('GET', 'v4/api/film/now-playing', data)

export {
  fetchImages,
  fetchNowPlaying
}

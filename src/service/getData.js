import fetch from '@/config/fetch'

const fetchImages = () => fetch('GET', 'v4/api/billboard/home')

export {
  fetchImages
}

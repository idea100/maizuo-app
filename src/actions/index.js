import { fetchImages, fetchNowPlaying, fetchComingSoon } from '@/service/getData'

export const REQUEST_POSTS_IMAGE = 'REQUEST_POSTS_IMAGE'
export const RECEIVE_POSTS_IMAGE = 'RECEIVE_POSTS_IMAGE'
export const RECEIVE_POSTS_NOW_PLAYING = 'RECEIVE_POSTS_NOW_PLAYING'
export const REQUEST_POSTS_NOW_PLAYING = 'REQUEST_POSTS_NOW_PLAYING'
export const REQUEST_POSTS_COMING_SOON = 'REQUEST_POSTS_COMING_SOON'
export const RECEIVE_POSTS_COMING_SOON = 'RECEIVE_POSTS_COMING_SOON'


export const requestImagePosts = () => ({
  type: REQUEST_POSTS_IMAGE
})

export const receiveImagePosts = (resp) => ({
  type: RECEIVE_POSTS_IMAGE,
  resp,
  receivedAt: Date.now()
})

export const requestNowPlayingPosts = () => ({
  type: RECEIVE_POSTS_NOW_PLAYING
})

export const receiveNowPlayingPosts = (resp) => ({
  type: REQUEST_POSTS_NOW_PLAYING,
  resp,
  receivedAt: Date.now()
})

export const requestComingSoonPosts = () => ({
  type: REQUEST_POSTS_COMING_SOON
})

export const receiveComingSoonPosts = (resp) => ({
  type: RECEIVE_POSTS_COMING_SOON,
  resp,
  receivedAt: Date.now()
})


export const fetchImagesAsync = () => dispatch => {
  dispatch(requestImagePosts())

  return fetchImages()
    .then(resp => dispatch(receiveImagePosts(resp.data.billboards)))
    .catch(err => console.log(err))
}

export const fetchNowPlayingAsync = () => dispatch => {
  dispatch(requestNowPlayingPosts())

  return fetchNowPlaying()
    .then(resp => dispatch(receiveNowPlayingPosts(resp.data.films)))
    .catch(err => console.log(err))
}

export const fetchComingSoonAsync = () => dispatch => {
  dispatch(requestComingSoonPosts())

  return fetchComingSoon()
    .then(resp => dispatch(receiveComingSoonPosts(resp.data.films)))
    .catch(err => console.log(err))
}

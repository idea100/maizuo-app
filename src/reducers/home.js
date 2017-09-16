import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchImages, fetchNowPlaying, fetchComingSoon } from '@/service/getData'

const {
  requestPostsImage,
  receivePostsImage,
  requestPostsNowPlaying,
  receivePostsNowPlaying,
  requestPostsComingSoon,
  receivePostsComingSoon
} = createActions({
  'REQUEST_POSTS_IMAGE': key => ({key}),
  'RECEIVE_POSTS_IMAGE': (key, resp) => ({key, resp}),
  'REQUEST_POSTS_NOW_PLAYING': key => ({key}),
  'RECEIVE_POSTS_NOW_PLAYING': (key, resp) => ({key, resp}),
  'REQUEST_POSTS_COMING_SOON': key => ({key}),
  'RECEIVE_POSTS_COMING_SOON': (key, resp) => ({key, resp})
})

export const fetchImagesAsync = () => dispatch => {
  dispatch(requestPostsImage('images'))

  return fetchImages()
    .then(resp => dispatch(receivePostsImage('images', resp.data.billboards)))
    .catch(err => console.log(err))
}

export const fetchNowPlayingAsync = () => dispatch => {
  dispatch(requestPostsNowPlaying('nowPlaying'))

  return fetchNowPlaying()
    .then(resp => dispatch(receivePostsNowPlaying('nowPlaying', resp.data.films)))
    .catch(err => console.log(err))
}

export const fetchComingSoonAsync = () => dispatch => {
  dispatch(requestPostsComingSoon('comingSoon'))

  return fetchComingSoon()
    .then(resp => dispatch(receivePostsComingSoon('comingSoon', resp.data.films)))
    .catch(err => console.log(err))
}

export default handleActions({
  [combineActions(
    requestPostsImage,
    receivePostsImage,
    requestPostsNowPlaying,
    receivePostsNowPlaying,
    requestPostsComingSoon,
    receivePostsComingSoon
  )]( state, { payload: { key, resp } } ) {
    return {
      ...state,
      [key]: resp
    }
  }
}, {images: [], nowPlaying: [], comingSoon: []})

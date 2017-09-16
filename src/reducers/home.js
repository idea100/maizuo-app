import { combineReducers } from 'redux'
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
  'REQUEST_POSTS_IMAGE': () => ({}),
  'RECEIVE_POSTS_IMAGE': resp => ({resp}),
  'REQUEST_POSTS_NOW_PLAYING': () => ({}),
  'RECEIVE_POSTS_NOW_PLAYING': resp => ({resp}),
  'REQUEST_POSTS_COMING_SOON': () => ({}),
  'RECEIVE_POSTS_COMING_SOON': resp => ({resp})
})

export const fetchImagesAsync = () => dispatch => {
  dispatch(requestPostsImage())

  return fetchImages()
    .then(resp => dispatch(receivePostsImage(resp.data.billboards)))
    .catch(err => console.log(err))
}

export const fetchNowPlayingAsync = () => dispatch => {
  dispatch(requestPostsNowPlaying())

  return fetchNowPlaying()
    .then(resp => dispatch(receivePostsNowPlaying(resp.data.films)))
    .catch(err => console.log(err))
}

export const fetchComingSoonAsync = () => dispatch => {
  dispatch(requestPostsComingSoon())

  return fetchComingSoon()
    .then(resp => dispatch(receivePostsComingSoon(resp.data.films)))
    .catch(err => console.log(err))
}


export default combineReducers({
  images: handleActions({
    [combineActions(requestPostsImage, receivePostsImage)](state, { payload: { resp } }) {
      return { ...state, resp };
    }
  }, {}),
  nowPlaying: handleActions({
    [combineActions(requestPostsNowPlaying, receivePostsNowPlaying)](state, { payload: { resp } }) {
      return { ...state, resp };
    }
  }, {}),
  comingSoon: handleActions({
    [combineActions(requestPostsComingSoon, receivePostsComingSoon)](state, { payload: { resp } }) {
      return { ...state, resp };
    }
  }, {})
})


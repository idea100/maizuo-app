import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchImages, fetchNowPlaying, fetchComingSoon } from 'service/getData'

const {
  requestPostsDataHome,
  receivePostsDataHome
} = createActions({
  'REQUEST_POSTS_DATA_HOME': key => ({key}),
  'RECEIVE_POSTS_DATA_HOME': (key, resp) => ({key, resp})
})

export const fetchImagesAsync = () => dispatch => {
  dispatch(requestPostsDataHome('images'))

  return fetchImages()
    .then(resp => dispatch(receivePostsDataHome('images', resp.data.billboards)))
    .catch(err => console.log(err))
}

export const fetchNowPlayingAsync = () => dispatch => {
  dispatch(requestPostsDataHome('nowPlaying'))

  return fetchNowPlaying()
    .then(resp => dispatch(receivePostsDataHome('nowPlaying', resp.data.films)))
    .catch(err => console.log(err))
}

export const fetchComingSoonAsync = () => dispatch => {
  dispatch(requestPostsDataHome('comingSoon'))

  return fetchComingSoon()
    .then(resp => dispatch(receivePostsDataHome('comingSoon', resp.data.films)))
    .catch(err => console.log(err))
}

export default handleActions({
  [combineActions(
    requestPostsDataHome,
    receivePostsDataHome
  )]( state, { payload: { key, resp } } ) {
    return {
      ...state,
      [key]: resp
    }
  }
}, {images: [], nowPlaying: [], comingSoon: []})

import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchCinemas, fetchCinemaDetail } from 'service/getData'

const {
  requestPostsDataCinemas,
  receivePostsDataCinemas,
  requestPostsDataCinemasDetail,
  receivePostsDataCinemasDetail,
} = createActions({
  'REQUEST_POSTS_DATA_CINEMAS': key => ({key}),
  'RECEIVE_POSTS_DATA_CINEMAS': (key, resp) => ({key, resp}),
  'REQUEST_POSTS_DATA_CINEMAS_DETAIL': key => ({key}),
  'RECEIVE_POSTS_DATA_CINEMAS_DETAIL': (key, resp) => ({key, resp})
})

export const fetchCinemasAsync = () => dispatch => {
  dispatch(requestPostsDataCinemas('cinemas'))

  return fetchCinemas()
    .then(resp => dispatch(receivePostsDataCinemas('cinemas', resp.data.cinemas)))
    .catch(err => console.log(err))
}

export const fetchCinemaAsync = (id) => dispatch => {
  dispatch(requestPostsDataCinemasDetail('cinema'))

  return fetchCinemaDetail(id)
    .then(resp => dispatch(receivePostsDataCinemasDetail('cinema', resp.data.cinema)))
    .catch(err => console.log(err))
}

export default handleActions({
  [combineActions(
    requestPostsDataCinemas,
    receivePostsDataCinemas,
    requestPostsDataCinemasDetail,
    receivePostsDataCinemasDetail
  )]( state, { payload: { key, resp } } ) {
    return {
      ...state,
      [key]: resp
    }
  }
}, { cinemas: [], cinema: {} })



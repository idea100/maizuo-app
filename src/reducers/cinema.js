import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchCinemas } from '@/service/getData'

const {
  requestPostsDataCinemas,
  receivePostsDataCinemas,
} = createActions({
  'REQUEST_POSTS_DATA_CINEMAS': key => ({key}),
  'RECEIVE_POSTS_DATA_CINEMAS': (key, resp) => ({key, resp})
})

export const fetchCinemasAsync = () => dispatch => {
  dispatch(requestPostsDataCinemas('cinemas'))

  return fetchCinemas()
    .then(resp => dispatch(receivePostsDataCinemas('cinemas', resp.data.cinemas)))
    .catch(err => console.log(err))
}

export default handleActions({
  [combineActions(
    requestPostsDataCinemas,
    receivePostsDataCinemas
  )]( state, { payload: { key, resp } } ) {
    return {
      ...state,
      [key]: resp
    }
  }
}, { cinemas: [] })



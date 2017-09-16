import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchCitys } from '@/service/getData'

const {
  requestPostsCities,
  receivePostsCities,
} = createActions({
  'REQUEST_POSTS_CITIES': key => ({key}),
  'RECEIVE_POSTS_CITIES': (key, resp) => ({key, resp})
})

export const fetchCitiesAsync = () => dispatch => {
  dispatch(requestPostsCities('cities'))

  return fetchCitys()
    .then(resp => dispatch(receivePostsCities('cities', resp.data.cities)))
    .catch(err => console.log(err))
}

export default handleActions({
  [combineActions(
    requestPostsCities,
    receivePostsCities
  )]( state, { payload: { key, resp } } ) {
    return {
      ...state,
      [key]: resp
    }
  }
}, { cities: [] })



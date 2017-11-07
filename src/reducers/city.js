import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchCitys } from 'service/getData'

const {
  requestPostsDataCity,
  receivePostsDataCity,
} = createActions({
  'REQUEST_POSTS_DATA_CITY': key => ({key}),
  'RECEIVE_POSTS_DATA_CITY': (key, resp) => ({key, resp})
})

export const fetchCitiesAsync = () => dispatch => {
  dispatch(requestPostsDataCity('cities'))

  return fetchCitys()
    .then(resp => dispatch(receivePostsDataCity('cities', resp.data.cities)))
    .catch(err => console.log(err))
}

export default handleActions({
  [combineActions(
    requestPostsDataCity,
    receivePostsDataCity
  )]( state, { payload: { key, resp } } ) {
    return {
      ...state,
      [key]: resp
    }
  }
}, { cities: [] })



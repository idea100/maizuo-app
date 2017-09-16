import { combineReducers } from 'redux'
import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchCitys } from '@/service/getData'

const {
  requestPostsCities,
  receivePostsCities,
} = createActions({
  'REQUEST_POSTS_CITIES': () => ({}),
  'RECEIVE_POSTS_CITIES': resp => ({resp})
})

export const fetchCitiesAsync = () => dispatch => {
  dispatch(requestPostsCities())

  return fetchCitys()
    .then(resp => dispatch(receivePostsCities(resp.data.cities)))
    .catch(err => console.log(err))
}


export default combineReducers({
  cities: handleActions({
    [combineActions(requestPostsCities, receivePostsCities)](state, { payload: { resp } }) {
      return { ...state, resp };
    }
  }, {})
})


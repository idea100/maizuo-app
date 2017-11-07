import { createActions, handleActions, combineActions } from 'redux-actions'
import { fetchUserInfo } from 'service/getData'

export const {
  requestPostsDataUser,
  receivePostsDataUser
} = createActions({
  'REQUEST_POSTS_DATA_USER': key => ({ key }),
  'RECEIVE_POSTS_DATA_USER': (key, resp) => ({ key, resp })
})

export const fetchUserInfoAsync = () => dispatch => {
  dispatch(requestPostsDataUser('userInfo'))

  return fetchUserInfo()
    .then(resp => dispatch(receivePostsDataUser('userInfo', resp.data.user)))
    .catch(err => dispatch(receivePostsDataUser('userInfo', { login: false })))
}


export default handleActions({
  [combineActions(
    requestPostsDataUser,
    receivePostsDataUser
  )]( state, { payload: { key, resp } } ) {
    return {
      ...state,
      [key]: resp
    }
  }
}, { userInfo: {} })

import { createActions, handleActions, combineActions } from 'redux-actions'


export const {
  loginSuccess
} = createActions({
  'LOGIN_SUCCESS': data => ({ data })
})


export default handleActions({
  [combineActions(
    loginSuccess
  )]( state, { payload: { data } } ) {
    return {
      ...state,
      data
    }
  }
}, {  })

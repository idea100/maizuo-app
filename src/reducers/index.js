import { combineReducers } from 'redux'
import home from './home'
import city from './city'
import login from './login'
import user from './user'

export default combineReducers({
  home,
  city,
  login,
  user
})

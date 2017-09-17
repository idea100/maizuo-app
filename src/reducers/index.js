import { combineReducers } from 'redux'
import home from './home'
import city from './city'
import login from './login'

export default combineReducers({
  home,
  city,
  login
})

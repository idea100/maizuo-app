import { combineReducers } from 'redux'
import {
  REQUEST_POSTS_IMAGE,
  RECEIVE_POSTS_IMAGE,
  RECEIVE_POSTS_NOW_PLAYING,
  REQUEST_POSTS_NOW_PLAYING,
  REQUEST_POSTS_COMING_SOON,
  RECEIVE_POSTS_COMING_SOON
} from '@/actions'

const images = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS_IMAGE:
    case RECEIVE_POSTS_IMAGE:
      return {
        resp: action.resp
      }
    default:
      return state
  }
}

const nowPlaying = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS_NOW_PLAYING:
    case REQUEST_POSTS_NOW_PLAYING:
      return {
        resp: action.resp
      }
    default:
      return state
  }
}

const comingSoon = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_POSTS_COMING_SOON:
    case RECEIVE_POSTS_COMING_SOON:
      return {
        resp: action.resp
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  images,
  nowPlaying,
  comingSoon
})

export default rootReducer

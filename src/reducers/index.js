import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS } from '@/actions'

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  posts: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        posts: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const getImages = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  getImages
})

export default rootReducer

import { fetchImages, fetchNowPlaying, fetchComingSoon } from '@/service/getData'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


export const requestPosts = reddit => ({
  type: REQUEST_POSTS,
  reddit
})

export const receivePosts = (reddit, posts) => ({
  type: RECEIVE_POSTS,
  reddit,
  posts,
  receivedAt: Date.now()
})


export const fetchImagesAsync = reddit => dispatch => {
  dispatch(requestPosts(reddit))

  return fetchImages()
          .then(resp => dispatch(receivePosts(reddit, resp.data.billboards)))
          .catch(err => console.log(err))
}

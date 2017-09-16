import Content from './content'
import { connect } from 'react-redux'
import { fetchImagesAsync, fetchNowPlayingAsync, fetchComingSoonAsync } from '@/reducers/home'

const mapStateToProps = (state) => {
  const { images, nowPlaying, comingSoon } = state.home
  return {
    images: images.resp || [],
    nowPlaying: nowPlaying.resp || [],
    comingSoon: comingSoon.resp || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => {
      dispatch(fetchImagesAsync())
    },
    fetchNowPlaying: () => {
      dispatch(fetchNowPlayingAsync())
    },
    fetchComingSoon: () => {
      dispatch(fetchComingSoonAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)


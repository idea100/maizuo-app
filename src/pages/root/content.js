import React, { Component } from 'react'
import { fetchImages, fetchNowPlaying, fetchComingSoon } from '@/service/getData'

import NowPlayingItems from '@/container/nowPlayingItems'
import Slide from '@/container/Slide'
import ComingSoonItems from '@/container/ComingSoonItems'
import Header from './header'

import { connect } from 'react-redux'
import { fetchImagesAsync } from '@/actions'


class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      nowPlaying: [],
      comingSoon: []
    }
  }

  componentDidMount () {
    // fetchImages()
    //   .then(resp =>
    //       this.setState({images: this.formatterImages(resp.data.billboards)}))
    //   .catch(err => console.log(err))

    fetchNowPlaying()
      .then(resp =>
          this.setState({nowPlaying: resp.data.films}))
      .catch(err => console.log(err))

    fetchComingSoon()
      .then(resp =>
        this.setState({comingSoon: resp.data.films}))
      .catch(err => console.log(err))

    const { dispatch } = this.props
    dispatch(fetchImagesAsync('posts'))

  }

  formatterImages (array) {
    if (Array.isArray(array) && array.length > 0) {
      while (array.length < 3) {
        array.push(array[0])
      }
    }

    return array || []
  }

  render () {
    return (
      <div className="App">
        <Header {...this.props} title="卖座电影"></Header>
        <div className="slide">
          <Slide items={this.formatterImages(this.props.posts.posts)}></Slide>
          <NowPlayingItems items={this.state.nowPlaying}></NowPlayingItems>
          <ComingSoonItems items={this.state.comingSoon}></ComingSoonItems>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { getImages } = state
  console.log(state)
  return {
    posts: getImages.posts || {}
  }
}


export default connect(mapStateToProps)(Content)

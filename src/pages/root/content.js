import React, { Component } from 'react'

import NowPlayingItems from 'components/NowPlayingItems'
import Slide from 'components/Slide'
import ComingSoonItems from 'components/ComingSoonItems'
import Header from 'container/header'


export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      nowPlaying: [],
      comingSoon: []
    }
  }

  componentDidMount () {
    const { fetchImages, fetchNowPlaying, fetchComingSoon } = this.props
    fetchImages()
    fetchNowPlaying()
    fetchComingSoon()

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
          <Slide items={this.formatterImages(this.props.images)}></Slide>
          <NowPlayingItems items={this.props.nowPlaying}></NowPlayingItems>
          <ComingSoonItems items={this.props.comingSoon}></ComingSoonItems>
        </div>
      </div>
    )
  }
}

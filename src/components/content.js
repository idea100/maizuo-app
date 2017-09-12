import React, { Component } from 'react'
import { fetchImages, fetchNowPlaying, fetchComingSoon } from '@/service/getData'

import NowPlayingItems from '@/container/nowPlayingItems'
import Slide from '@/container/Slide'
import ComingSoonItems from '@/container/ComingSoonItems'
import Header from './header'


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
    fetchImages()
      .then(resp =>
          this.setState({images: this.formatterImages(resp.data.billboards)}))
      .catch(err => console.log(err))

    fetchNowPlaying()
      .then(resp =>
          this.setState({nowPlaying: resp.data.films}))
      .catch(err => console.log(err))

    fetchComingSoon()
      .then(resp =>
        this.setState({comingSoon: resp.data.films}))
      .catch(err => console.log(err))

  }

  formatterImages (array) {
    if (Array.isArray(array)) {
      while (array.length < 3) {
        array.push(array[0])
      }
    }

    return array
  }

  render () {
    return (
      <div className="App">
        <Header {...this.props}></Header>
        <div className="slide">
          <Slide items={this.state.images}></Slide>
          <NowPlayingItems items={this.state.nowPlaying}></NowPlayingItems>
          <ComingSoonItems items={this.state.comingSoon}></ComingSoonItems>
        </div>
      </div>
    )
  }
}

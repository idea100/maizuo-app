import React, { Component } from 'react'
import { fetchImages, fetchNowPlaying, fetchComingSoon } from '@/service/getData'

import NowPlayingItems from '@/container/nowPlayingItems'
import Slide from '@/container/Slide'
import ComingSoonItems from '@/container/ComingSoonItems'


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
      .then(resp => this.setState({images: resp.data.billboards}))
      .catch(err => console.log(err))

    fetchNowPlaying()
      .then(resp =>
          this.setState({nowPlaying: resp.data.films})
      )
      .catch(err => console.log(err))

    fetchComingSoon()
      .then(resp => this.setState({comingSoon: resp.data.films}))
      .catch(err => console.log(err))

  }

  render () {
    return (
      <div className="slide">
        <Slide items={this.state.images}></Slide>
        <NowPlayingItems items={this.state.nowPlaying}></NowPlayingItems>
        <ComingSoonItems items={this.state.comingSoon}></ComingSoonItems>
      </div>
    )
  }
}

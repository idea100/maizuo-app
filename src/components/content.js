import React, { Component } from 'react'
import { fetchImages, fetchNowPlaying } from '@/service/getData'

import NowPlayingItems from '@/container/nowPlayingItems'
import Slide from '@/container/Slide'


export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      nowPlaying: []
    }
  }

  componentDidMount () {
    fetchImages()
      .then(resp => this.setState({images: resp.data.billboards}))
      .catch(resp => console.log(resp))

    fetchNowPlaying()
      .then(resp =>
          this.setState({nowPlaying: resp.data.films})
      )
      .catch(resp => console.log(resp))
  }

  render () {
    return (
      <div className="slide">
        <div className="top-images">
          <Slide items={this.state.images}></Slide>
        </div>
        <div>
          <NowPlayingItems items={this.state.nowPlaying}></NowPlayingItems>
        </div>
      </div>
    )
  }
}

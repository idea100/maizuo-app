import React, { Component } from 'react'
import { fetchImages, fetchNowPlaying } from '@/service/getData'
import NowPlayingItems from './nowPlayingItems'


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

    // fetch('/api/v4/api/film/now-playing', {page: 1, count: 5})
    //   .then(resp => resp.json())
    //   // .then(json => console.log(json.data.films))
    //   .then(json =>
    //     this.setState({nowPlaying: json.data.films})
    //   )

    fetchNowPlaying()
      .then(resp => {
        setTimeout(() => {
          console.log(resp.data.films)
          this.setState({nowPlaying: resp.data.films})
        }, 100)
      })
      // .then(resp => console.log(resp))
      .catch(resp => console.log(resp))
  }

  render () {
    return (
      <div className="slide">
        <div className="top-images">
          <ul>
            {
              this.state.images.map((item, index) =>(
                <li className={'silder' + index} key={index}>
                  <img src={item.imageUrl} alt={item.name}/>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <div>
            {
              this.state.nowPlaying.map((item, index) =>
              <NowPlayingItems key={item.id} item={item}/>)
            }
          </div>
        </div>
      </div>
    )
  }
}

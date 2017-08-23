import React, { Component } from 'react'

export default class NowPlayingItems extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const item = this.props.item
    return (
      <div className="now-playing">
        <img src={item.cover.origin}/>
        <div className="movice-msg">
          <span>{item.name}</span><br/>
          <span>{item.cinemaCount}家影院上映 {item.watchCount}人购票</span>
          <span style={{float: 'right'}}>{item.grade}</span>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class CinemaItem extends Component {

  constructor (props) {
    super(props)
  }


  render () {
    let item = this.props.cinemaItem

    return (
      <li>
        { item.name }
      </li>
    )
  }

}

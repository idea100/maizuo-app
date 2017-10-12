import React, { Component } from 'react'
import CinemaItem from './CinemaItem'

export default class CinemaGroup extends Component {

  constructor (props) {
    super(props)
  }


  render () {
    let collections = this.props.collections

    return (
      <li>
        <div>{ collections[0].district.name }</div>
        <ul>
          {
            collections.map(item => <CinemaItem key={ item.id } cinemaItem={item} />)
          }
        </ul>
      </li>
    )
  }

}

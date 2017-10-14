import React, { Component } from 'react'
import CinemaItem from './CinemaItem'

export default class CinemaGroup extends Component {

  constructor (props) {
    super(props)
    this.toggleCinemaItems = this.toggleCinemaItems.bind(this)

    this.state = {
      showItems: false
    }
  }

  toggleCinemaItems () {
    this.setState({
      showItems: !this.state.showItems
    })
  }

  render () {
    let collections = this.props.collections

    return (
      <li>
        <div
          onClick={ this.toggleCinemaItems }
          className="district-cinemas"
        >{ collections[0].district.name }</div>
        {
          this.state.showItems ?
          (<ul className="ul-none">
            {
              collections.map(item => <CinemaItem key={ item.id } cinemaItem={item} />)
            }
          </ul>) : ''
        }
      </li>
    )
  }

}

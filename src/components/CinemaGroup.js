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

  onCinemaItemClick (item) {
    if (typeof this.props.onCinemaItemClick === 'function') {
      this.props.onCinemaItemClick(item)
    }
  }

  render () {
    let collections = this.props.collections

    return (
      <li>
        <div
          onClick={ this.toggleCinemaItems }
          className="district-cinemas"
        >{ collections[0].district.name }</div>

        <ul className={ this.state.showItems ? 'ul-none' : 'ul-none hide' }>
          {
            collections.map(item => <CinemaItem onCinemaItemClick={ () => this.onCinemaItemClick(item) } key={ item.id } cinemaItem={item} />)
          }
        </ul>

      </li>
    )
  }

}

import React, { Component } from 'react'

export default class CinemaItem extends Component {

  onCinemaItemClick() {
    if (typeof this.props.onCinemaItemClick === 'function') {
      this.props.onCinemaItemClick()
    }
  }

  render () {
    let item = this.props.cinemaItem

    return (
      <li className="cinema-li" onClick={ () => this.onCinemaItemClick() }>
        <div className="cinema-item">
          <div className="cinema-content">
            <div className="item1">
              <span className="cinema-name">{ item.name }</span>
            </div>

            <div className="item2">
              <i className="tip_01">可乐爆米花</i>
            </div>

            <div className="item3">
              { item.address }
            </div>

            <div className="item4">
              距离未知
            </div>
          </div>
        </div>
      </li>
    )
  }

}

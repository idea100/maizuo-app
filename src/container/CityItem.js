import React, { Component } from 'react'

export default class CityItem extends Component {

  constructor (props) {
    super(props)

    this.onItemClick = this.onItemClick.bind(this)
  }

  getOffsetTop () {
    return this.elDom.offsetTop
  }

  onItemClick (item, items, key) {
    if ( this.props.onClick ) {
      this.props.onClick({
        item,
        items,
        key,
        $el: this.elDom
      })
    }
  }

  render () {
    const index = this.props.index
    const items = this.props.items

    return (
      <div ref={ ref => this.elDom = ref }>
        <div className="city-head">{ index }</div>
        <ul className="city-ul">
          {
            items.map((item, key) => (
              <li
                onClick={ () => this.onItemClick(item, items, index) }
                className="city-item"
                key={ key }
              >{ item.name }</li>
            ))
          }
        </ul>
      </div>
    )
  }

}

import React, { Component } from 'react'
import Header from 'container/header'
import CinemaGroup from 'components/CinemaGroup'
import _ from 'lodash'

export default class User extends Component {
  componentDidMount () {
    this.props.fetchCinemas()
    this.onCinemaItemClick = this.onCinemaItemClick.bind(this)
  }

  onCinemaItemClick (item) {
    console.log(item)
    this.props.history.push(`/cinema/${item.id}`)
  }

  render () {
    let groupCinemas = _.groupBy(this.props.cinemas, item => item.district.pinyin)

    return (
      <div className="cinema">
        <Header {...this.props} title="全部影院"/>

        <ul className="ul-none">
          {
            _.map(groupCinemas, (collections, key) => <CinemaGroup onCinemaItemClick={ this.onCinemaItemClick } key={key} collections={collections} />)
          }
        </ul>
      </div>
    )

  }
}

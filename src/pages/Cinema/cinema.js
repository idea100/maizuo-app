import React, { Component } from 'react'
import Header from '@/container/header'
import CinemaGroup from '@/components/CinemaGroup'
import _ from 'lodash'


export default class User extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchCinemas()
  }

  render () {
    let groupCinemas = _.groupBy(this.props.cinemas, item => item.district.pinyin)

    return (
      <div className="cinema">
        <Header {...this.props} title="全部影院"/>

        <ul>
          {
            _.map(groupCinemas, (collections, key) => <CinemaGroup key={key} collections={collections} />)
          }
        </ul>
      </div>
    )

  }
}

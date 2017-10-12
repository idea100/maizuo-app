import React, { Component } from 'react'
import Header from '@/container/header'

export default class User extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchCinemas()
  }

  render () {
    return (
      <div className="cinema">
        <Header {...this.props} title="全部影院"/>

        <ul>
          {
            this.props.cinemas.map(item => <li>{item.name}</li>)
          }
        </ul>
      </div>
    )

  }
}

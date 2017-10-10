import React, { Component } from 'react'
import Header from '@/container/header'

export default class User extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchUserInfo()
  }

  render () {
    return (
      <div className="cities">
        <Header {...this.props} title="登录"/>
      </div>
    )

  }
}

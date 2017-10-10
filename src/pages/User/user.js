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
    let userInfo = this.props.userInfo || {}

    return (
      <div className="user">
        <Header {...this.props} title="登录"/>
        <div className="user-info">
          <img src={userInfo.avatorUrl} alt=""/>

          <div className="detail">
            <div className="detail-line">{userInfo.name}</div>
            <div className="detail-line detail-id">ID:{userInfo.id}</div>
            <div className="detail-line detail-logout">
              <a href="#">退出</a>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

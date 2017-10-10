import React, { Component } from 'react'
import Header from '@/container/header'
import { fetchLogout } from '@/service/getData'

export default class User extends Component {
  constructor (props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  componentDidMount () {
    this.props.fetchUserInfo()
  }

  onLogout () {
    fetchLogout().then(resp => {
      this.props.history.push('/login')
    }).catch(err => {
      console.log(err)
    })
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
              <a href="#" onClick={this.onLogout}>退出</a>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

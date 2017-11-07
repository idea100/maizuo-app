import React, { Component } from 'react'
import Header from 'container/header'
import { fetchLogout } from 'service/getData'

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

    if (userInfo.login === false) {
      setTimeout(() => this.props.history.push('/login'), 1)
    }

    return (
      <div className="user">
        <Header {...this.props} title="我的"/>
        <div className="user-info">
          <img src={userInfo.avatorUrl} alt=""/>

          <div className="detail">
            <div className="detail-line">{userInfo.name}</div>
            <div className="detail-line detail-id">ID:{userInfo.id}</div>
            <div className="detail-line detail-logout">
              <a onClick={this.onLogout}>退出</a>
            </div>
          </div>

        </div>

        <div className="user-list">
          <div className="user-list-item">
            <div className="user-list-line">
              <i className="iconfont icon-ticket-filled xxx1"></i>
              <span className="title">影票订单</span>
              <div className="pull-right">
                0张
              </div>
            </div>
          </div>

          <div className="user-list-item">
            <div className="user-list-line">
              <i className="iconfont icon-sandglass-filled xxx2"></i>
              <span className="title">影票待付订单</span>
              <div className="pull-right">
                0张
              </div>
            </div>
          </div>

          <div className="user-list-item">
            <div className="user-list-line">
              <i className="iconfont icon-mall-filled xxx3"></i>
              <span className="title">影票订单</span>
              <div className="pull-right">
                0张
              </div>
            </div>
          </div>

          <div className="user-list-item">
            <div className="user-list-line">
              <i className="iconfont icon-coupon-filled xxx4"></i>
              <span className="title">影票订单</span>
              <div className="pull-right">
                0张
              </div>
            </div>
          </div>

          <div className="user-list-item">
            <div className="user-list-line">
              <i className="iconfont icon-card-filled  xxx5"></i>
              <span className="title">影票订单</span>
              <div className="pull-right">
                0张
              </div>
            </div>
          </div>

          <div className="user-list-item">
            <div className="user-list-line">
              <i className="iconfont icon-ticket-filled xxx6"></i>
              <span className="title">影票订单</span>
              <div className="pull-right">
                0张
              </div>
            </div>
          </div>

          <div className="user-list-item">
            <div className="user-list-line">
              <i className="iconfont icon-setting-filled xxx7"></i>
              <span className="title">影票订单</span>
              <div className="pull-right">
                0张
              </div>
            </div>
          </div>


        </div>
      </div>
    )

  }
}

import React, { Component } from 'react'
import { AlignJustify, User } from 'react-feather'
import { getCookie } from 'config/utils'

export default class Header extends Component {

  constructor (props) {
    super(props)
    this.onUserClick = this.onUserClick.bind(this)
    this.onMenuClick = this.onMenuClick.bind(this)

    this.state = {
      showMenu: false
    }
  }

  onUserClick () {
    this.props.history.push(getCookie('userId') ? '/user' : '/login')
  }

  onMenuClick () {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  onMenuItemClick (title) {
    this.setState({
      showMenu: false
    })

    if (title) {
      this.props.history.push(title)
    }
  }

  render () {
    let cityName = getCookie('cityName')
    let { showMenu } = this.state

    return (
      <header className="header">
        <AlignJustify className="menu-icon" onClick={this.onMenuClick}/>
        <span className="maizuo-title">{this.props.title}</span>
        {/*<User className="maizuo-user" onClick={ () => this.props.history.push('/login') } />*/}
        <User className="maizuo-user" onClick={ this.onUserClick } />
        <span className="maizuo-city" onClick={ () => this.props.history.push('/citys') }>{ cityName }</span>
        <div className={ showMenu ? 'menu' : 'menu hide-menu' }>
          <ul>
            <li className="menu-item" onClick={() => this.onMenuItemClick('/')}>
              首页
            </li>

            <li className="menu-item" onClick={() => this.onMenuItemClick('/')}>
              影片
            </li>

            <li className="menu-item" onClick={() => this.onMenuItemClick('/cinema')}>
              影院
            </li>

            <li className="menu-item" onClick={() => this.onMenuItemClick('/')}>
              商城
            </li>

            <li className="menu-item" onClick={() => this.onMenuItemClick('/user')}>
              我的
            </li>

            <li className="menu-item" onClick={() => this.onMenuItemClick('/')}>
              卖座卡
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

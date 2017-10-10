import React, { Component } from 'react'
import { AlignJustify, User } from 'react-feather'
import { getCookie } from '@/config/utils'

export default class Header extends Component {

  constructor (props) {
    super(props)
    this.onUserClick = this.onUserClick.bind(this)
  }

  onUserClick () {
    this.props.history.push(getCookie('userId') ? '/user' : '/login')
  }

  render () {
    let cityName = getCookie('cityName')

    return (
      <header className="header">
        <AlignJustify className="menu-icon" onClick={() => alert('you click menu')}/>
        <span className="maizuo-title">{this.props.title}</span>
        {/*<User className="maizuo-user" onClick={ () => this.props.history.push('/login') } />*/}
        <User className="maizuo-user" onClick={ this.onUserClick } />
        <span className="maizuo-city" onClick={ () => this.props.history.push('/citys') }>{ cityName }</span>
      </header>
    )
  }
}

import React, { Component } from 'react'
import { AlignJustify, User } from 'react-feather'
import { getCookie } from '@/config/utils'

export default class Header extends Component {

  render () {
    let cityName = getCookie('cityName')

    return (
      <header className="header">
        <AlignJustify className="menu-icon" onClick={() => alert('you click menu')}/>
        <span className="maizuo-title">{this.props.title}</span>
        <User className="maizuo-user" onClick={ () => this.props.history.push('/login') } />
        <span className="maizuo-city" onClick={ () => this.props.history.push('/citys') }>{ cityName }</span>
      </header>
    )
  }
}

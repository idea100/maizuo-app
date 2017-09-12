import React, { Component } from 'react'
import { AlignJustify, User } from 'react-feather'

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <AlignJustify className="menu-icon" onClick={() => alert('you click menu')}/>
        <span className="maizuo-title">卖座电影</span>
        <User className="maizuo-user"/>
        <span className="maizuo-city" onClick={ () => this.props.history.push('/citys') }>深圳</span>
      </header>
    )
  }
}

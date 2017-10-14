import React, { Component } from 'react'
import Header from '@/container/header'


export default class User extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchCinema(this.props.match.params.id)
  }

  render () {
    let cinema = this.props.cinema
    console.log(cinema)
    return (
      <div className="cinema">
        <Header {...this.props} title={ cinema.name || '' }/>

        <div>
          <div className="cinema-img">
            <img className={ cinema.name ? 'opacity-show' : 'opacity-hide' } src="//static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png" alt=""/>
          </div>
        </div>
      </div>
    )

  }
}

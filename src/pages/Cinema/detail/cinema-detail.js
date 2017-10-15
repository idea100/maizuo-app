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

        <div className="detail-item">
          <div className="box-warp">
            <div className="img pull-left">
              <i className="iconfont icon-chair icon-color1"></i>
            </div>

            <div className="box">
              <div className="box-title">定座票</div>
              <div className="box-detail">选好场次及座位，到影院自助机取票</div>
              <button className="btn-default seat-btn">立即订座</button>
            </div>
          </div>
        </div>

        <div className="detail-item">
          <div className="box-warp">
            <div className="img pull-left">
              <i className="iconfont icon-ticket icon-color2"></i>
            </div>

            <div className="box">
              <div className="box-title">通兑票</div>
              <div className="box-detail">有效期内到影院前台兑换影票</div>
              <button className="btn-default seat-btn">立即订座</button>
            </div>
          </div>
        </div>

        <div className="detail-item">
          <div className="box-warp">
            <div className="img pull-left">
              <i className="iconfont icon-location icon-color3"></i>
            </div>

            <div className="box">
              <div className="box-title">{ cinema.address }</div>
              {/*<div className="box-detail">有效期内到影院前台兑换影票</div>*/}
              {/*<button className="btn-default seat-btn">立即订座</button>*/}
            </div>
          </div>
        </div>

        <div className="detail-item">
          <div className="box-warp">
            <div className="img pull-left">
              <i className="iconfont icon-phone icon-color4"></i>
            </div>

            <div className="box">
              <div className="box-title">{ cinema.telephones }</div>
              {/*<div className="box-detail">有效期内到影院前台兑换影票</div>*/}
              {/*<button className="btn-default seat-btn">立即订座</button>*/}
            </div>
          </div>
        </div>

        <div className="other-detail-item">
          <ul className="list-inline">

          </ul>
        </div>

      </div>
    )

  }
}

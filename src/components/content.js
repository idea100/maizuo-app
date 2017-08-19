import React, { Component } from 'react'

export default class Content extends Component {
  render () {
    return (
      <div className="slide">
        <div>
          <ul>
            <li className="silder1">
              <img src="https://static.maizuo.com/pc/v5/h5PicUpload/9c6b27260a23a248a49548979779168f.jpg" alt=""/>
            </li>

            <li className="silder2">
              <img src="https://static.maizuo.com/pc/v5/h5PicUpload/8c6e50d09e8fb3b20386655753a0fdf2.jpg" alt=""/>
            </li>

            <li className="silder3">
              <img src="https://static.maizuo.com/pc/v5/h5PicUpload/af62452085bb3a5ff275feb89c33e134.jpg" alt=""/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { fetchImages } from '@/service/getData'


export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount () {
    fetchImages().then(resp => this.setState({images: resp.data.billboards}))
  }

  render () {
    return (
      <div className="slide">
        <div>
          <ul>
            {
              this.state.images.map((item, index) =>(
                <li className={'silder' + index} key={index}>
                  <img src={item.imageUrl} alt={item.name}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

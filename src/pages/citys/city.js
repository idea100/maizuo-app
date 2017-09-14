import React, { Component } from 'react'
import Header from '@/pages/root/header'
import { fetchCitys } from '@/service/getData'

export default class Cities extends Component {
  constructor (props) {
    super(props)

    this.state = {
      citys: []
    }
  }

  componentDidMount () {
    fetchCitys().then(resp => this.formatterCities(resp.data.cities))
  }

  formatterCities(cities = []) {
    console.log(cities)
    cities.forEach(item => console.log(item))
  }

  render () {
    return (
      <div>
        <Header {...this.props} title="选择城市"></Header>
      </div>
    )
  }
}

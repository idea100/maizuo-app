import React, { Component } from 'react'
import Header from '@/pages/root/header'
import { fetchCitys } from '@/service/getData'
import _ from 'lodash'
import CityItem from '@/container/CityItem'

export default class Cities extends Component {
  constructor (props) {
    super(props)

    this.state = {
      citiesMap: {}
    }
  }

  componentDidMount () {
    fetchCitys().then(resp => this.formatterCities(resp.data.cities))
  }

  formatterCities(cities = []) {
    let groupCities = _.groupBy(cities, item => item.pinyin.substring(0, 1))

    this.setState({
      citiesMap: groupCities
    })

  }

  render () {
    const pinyinArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const citiesList = []

    pinyinArr.forEach(pinyin => {
      if (this.state.citiesMap[pinyin]) {
        citiesList.push({
          key: pinyin,
          list: this.state.citiesMap[pinyin]
        })
      }
    })


    return (
      <div>
        <Header {...this.props} title="选择城市"></Header>
        <section className="">
          {
            citiesList.map(item => (
              <CityItem key={item.key} index={item.key} items={item.list} />
            ))
          }
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Header from '@/pages/root/header'
import { fetchCitys, postCityId } from '@/service/getData'
import _ from 'lodash'
import CityItem from '@/container/CityItem'


export default class Cities extends Component {
  constructor (props) {
    super(props)

    this.state = {
      citiesMap: {},
      hotCities: []
    }

    this.onCityItemClick = this.onCityItemClick.bind(this)
  }

  componentDidMount () {
    fetchCitys().then(resp => this.formatterCities(resp.data.cities))
  }

  formatterCities(cities = []) {
    let groupCities = _.groupBy(cities, item => item.pinyin.substring(0, 1))

    this.setState({
      citiesMap: groupCities,
      hotCities: cities.filter(item => /^(北京|上海|广州|深圳)$/.test(item.name))
    })

  }

  onCityItemClick (options) {
    let { items, item, key, $el } = options

    if (key === '按字母排序') {
      const offsetTop = this['city_' + item.name].getOffsetTop()
      const $body = document.getElementsByTagName('body')[0]

      $body.scrollTop = offsetTop
    }

    if (/^[A-Z]$/.test(key) || key === '热门城市') {
      postCityId(item.id)
        .then(resp => this.props.history.push('/'))
        .catch(err => console.log(resp))
    }
  }

  render () {
    const pinyinArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const citiesList = []
    const sortPingyin = []

    pinyinArr.forEach(pinyin => {
      if (this.state.citiesMap[pinyin]) {
        citiesList.push({
          key: pinyin,
          list: this.state.citiesMap[pinyin]
        })

        sortPingyin.push({name: pinyin})
      }
    })

    citiesList.unshift({key: '按字母排序', list: sortPingyin})
    citiesList.unshift({key: '热门城市', list: this.state.hotCities})

    return (
      <div className="cities">
        <Header {...this.props} title="选择城市"></Header>

        <section className="city-list">
          {
            citiesList.map(item => (
              <CityItem
                ref={ ref => this['city_' + item.key] = ref }
                onClick={ this.onCityItemClick }
                key={ item.key }
                index={ item.key }
                items={ item.list } />
            ))
          }
        </section>
      </div>
    )
  }
}

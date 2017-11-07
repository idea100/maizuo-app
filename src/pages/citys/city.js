import React, { Component } from 'react'
import Header from 'container/header'
import { postCityId } from 'service/getData'
import _ from 'lodash'
import CityItem from 'components/CityItem'


export default class Cities extends Component {
  constructor (props) {
    super(props)

    this.onCityItemClick = this.onCityItemClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchCities()
  }

  formatterCities (cities = []) {
    let groupCities = _.groupBy(cities, item => item.pinyin.substring(0, 1))

    return {
      citiesMap: groupCities,
      hotCities: cities.filter(item => /^(北京|上海|广州|深圳)$/.test(item.name))
    }
  }

  onCityItemClick (options) {
    let { item, key } = options

    if (key === '按字母排序') {
      const offsetTop = this['city_' + item.name].getOffsetTop()
      const $body = document.getElementsByTagName('body')[0]

      $body.scrollTop = offsetTop
    }

    if (/^[A-Z]$/.test(key) || key === '热门城市') {
      postCityId(item.id)
        .then(resp => this.props.history.push('/'))
        .catch(err => console.log(err))
    }
  }

  render () {
    const pinyinArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const citiesList = []
    const sortPingyin = []
    const {
      citiesMap,
      hotCities
    } = this.formatterCities(this.props.cities)

    pinyinArr.forEach(pinyin => {
      if (citiesMap[pinyin]) {
        citiesList.push({
          key: pinyin,
          list: citiesMap[pinyin]
        })

        sortPingyin.push({name: pinyin})
      }
    })

    citiesList.unshift({key: '按字母排序', list: sortPingyin})
    citiesList.unshift({key: '热门城市', list: hotCities})

    return (
      <div className="cities">
        <Header {...this.props} title="选择城市"/>

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

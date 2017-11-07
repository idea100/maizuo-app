import City from './city'
import { connect } from 'react-redux'
import { fetchCitiesAsync } from 'reducers/city'

const mapStateToProps = (state) => {
  const { cities = [] } = state.city
  return { cities }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => {
      dispatch(fetchCitiesAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)


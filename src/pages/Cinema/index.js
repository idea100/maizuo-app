import Cinema from './cinema'
import { connect } from 'react-redux'
import { fetchCinemasAsync } from '@/reducers/cinema'

const mapStateToProps = (state) => {
  const { cinemas = [] } = state.cinemas
  return { cinemas }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCinemas: () => {
      dispatch(fetchCinemasAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinema)

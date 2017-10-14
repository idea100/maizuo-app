import Cinema from './cinema'
import { connect } from 'react-redux'
import { fetchCinemasAsync } from '@/reducers/cinema'
import CinemaDetail from './detail'

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

export { CinemaDetail }

export default connect(mapStateToProps, mapDispatchToProps)(Cinema)


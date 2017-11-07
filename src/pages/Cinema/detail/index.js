import CinemaDetail from './cinema-detail'
import { connect } from 'react-redux'
import { fetchCinemaAsync } from 'reducers/cinema'

const mapStateToProps = (state) => {
  const { cinema = {} } = state.cinemas
  return { cinema }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCinema: id => dispatch(fetchCinemaAsync(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetail)


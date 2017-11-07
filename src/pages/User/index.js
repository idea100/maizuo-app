import User from './user'
import { connect } from 'react-redux'
import { fetchUserInfoAsync } from 'reducers/user'

const mapStateToProps = (state) => {
  const { user } = state

  return { userInfo: user.userInfo || {} }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: data => {
      dispatch(fetchUserInfoAsync(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

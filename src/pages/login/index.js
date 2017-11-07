import Login from './login'
import { connect } from 'react-redux'
import { loginSuccess } from 'reducers/login'

const mapStateToProps = (state) => {
  const { login } = state
  return { login }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSuccess: data => {
      dispatch(loginSuccess(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


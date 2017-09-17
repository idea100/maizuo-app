import React, { Component } from 'react'
import Header from '@/container/header'
import { postLogin, fetchVerifyCode, fetchUserInfo } from '@/service/getData'
import MD5 from 'md5'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.onSubmitClick = this.onSubmitClick.bind(this)
    this.onUserNameInput = this.onUserNameInput.bind(this)
    this.onPasswordInout = this.onPasswordInout.bind(this)
    this.onVerifyBtnClick = this.onVerifyBtnClick.bind(this)

    this.state = {
      username: '13500000000',
      password: '422509',
      sendVerifyCode: false
    }
  }

  onSubmitClick (e) {
    const { username, password } = this.state
    postLogin({
      username,
      password: MD5(password),
      code: '',
      codeKey: '',
      loginType: /^\d{6}$/.test(password) ? 1 : 0,
    }).then(resp => {
      this.props.onLoginSuccess(resp.data.data)
      fetchUserInfo().then(resp => console.log(resp), err => console.log(err))
    }).catch(err => console.log(err))
  }

  onUserNameInput (e) {
    this.setState({username: e.target.value})
  }

  onPasswordInout (e) {
    this.setState({password: e.target.value})
  }

  onVerifyBtnClick (e) {
    if (this.state.sendVerifyCode) {
      return
    }

    this.setState({sendVerifyCode: true})

    fetchVerifyCode(this.state.username)
      .then(resp => this.setState({sendVerifyCode: true}))
      .catch(err => this.setState({sendVerifyCode: false}))
  }

  render () {
    return (
      <div className="cities">
        <Header {...this.props} title="登录"/>
        <div className="login">
          <div className="login-form">
            <div className="login-row login-row-input">
              <input defaultValue={this.state.username} onInput={ this.onUserNameInput } className="login-input" type="text" placeholder="输入手机号/邮箱"/>
              {
                /^1[3578]\d{9}$/.test(this.state.username) ? <div onClick={ this.onVerifyBtnClick } className="login-verify-btn">{this.state.sendVerifyCode ? '已发送' : '发送验证码'}</div> : ''
              }
            </div>
            <div className="login-row login-row-input">
              <input defaultValue={this.state.password} onInput={ this.onPasswordInout } className="login-input" type="password" placeholder="输入密码/验证码"/>
            </div>
            <div className="login-row">
              <button onClick={ this.onSubmitClick } className="login-center login-button">登录</button>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

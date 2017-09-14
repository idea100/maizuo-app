import React, { Component } from 'react'

import Header from '../root/header'
import '@/style/login.scss'

export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			passWord: '',
			errorMsg: '',
			codeTip: {
				text: '发送验证码',
				count: 60
			},
			display: 'none'
		}
		this.timer = ''

		this.handleChange = this.handleChange.bind(this)
		this.sendCode = this.sendCode.bind(this)
	}

	handleChange (event, name) {
		this.setState({
			[name]: event.target.value
		})

		if(name === 'userName') {
			this.isShowSmsCode(event)
		}
	}

	isShowSmsCode (event) {
		this.setState({
			display: /^1[34578]\d{9}$/.test(event.target.value) ? 'block' : 'none'
		})
	}

	sendCode (event) {
		let codeTipMsg = this.state.codeTip

		if(!!this.timer) {
			return;
		}

		this.timer = setInterval(() => {
            codeTipMsg.count -= 1

            if (codeTipMsg.count < 1) {
				codeTipMsg.count = 60
				clearInterval(this.timer)
				this.timer = ''
            }

            codeTipMsg.text = codeTipMsg.count !== 60 ? `重发(${codeTipMsg.count})` : '发送验证码'
            this.setState({
				codeTip: codeTipMsg
			})
         }, 1000)
	}

	render () {
		return (
			<div className="App">
				<Header {...this.props} title="卖座电影"></Header>
				<div className="login-form">
					<form>
						<div className="form-group">
							<input type="text" placeholder="输入手机号/邮箱" value={this.state.userName} onChange={e => this.handleChange(e, 'userName')}/>
							<div className="input-bg"></div>
							<span className="sms-code" style={{'display':this.state.display}} onClick={this.sendCode}>
								<i className="sms-code-tip"></i>
								<i className="sms-code-text">{this.state.codeTip.text}</i>
							</span>
						</div>
						<div className="form-group">
							<input type="text" placeholder="输入密码/验证码" value={this.state.passWord} onChange={e => this.handleChange(e, 'passWord')}/>
							<div className="input-bg"></div>
						</div>
						<span className="error-msg">{this.state.errorMsg}</span>
						<button type="submit">登录</button>
					</form>
				</div>
			</div>
		)
	}
}

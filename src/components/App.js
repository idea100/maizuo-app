import React, { Component } from 'react'
import logo from '@/assets/logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to APIBIBI</h2>
        </div>
        <p className="App-intro">
          心如止水
        </p>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'

import Header from './header'
import Content from './content'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    )
  }
}

export default App

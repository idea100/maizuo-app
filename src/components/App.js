import React, { Component } from 'react'
import Header from './header'
import Content from './content'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Route path="/" component={Content}></Route>
        </div>
      </Router>
    )
  }
}

export default App

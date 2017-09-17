import React, { Component } from 'react'
import Content from '@/pages/root'
import City from '@/pages/citys'
import Login from '@/pages/login'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Content }></Route>
          <Route path="/citys" component={ City }></Route>
          <Route path="/login" component={ Login }></Route>
        </div>
      </Router>
    )
  }
}

export default App

import React, { Component } from 'react'
import Content from '@/pages/root'
import City from '@/pages/citys'
import Login from '@/pages/login'
import User from '@/pages/User'

import {
  Router,
  Route
} from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '@/reducers'
import createHistory from 'history/createBrowserHistory'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

const history = createHistory()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={ Content }></Route>
            <Route path="/citys" component={ City }></Route>
            <Route path="/login" component={ Login }></Route>
            <Route path="/user" component={ User }></Route>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

import React from 'react'
import { render } from 'react-dom'
import App from './container/App'
import registerServiceWorker from './registerServiceWorker';
import './style/common.scss'
import './style/icon.css'

render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker();

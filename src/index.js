import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/pages/App'
import './_base.scss'

const rootElement = document.querySelector('#root')

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  rootElement
)

import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import App from './App'
import {AppProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

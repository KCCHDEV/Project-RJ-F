import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './headbar.css'
import Foots from './foote'
import LoadingBar from './loading/loading.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LoadingBar /> */}
    <div class="main">
    <head>
      <title>Golf Chan Website</title>
    </head>
      <App />

    </div>
    <Foots />
  </React.StrictMode>

)
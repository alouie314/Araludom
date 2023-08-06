import React from 'react'
import ReactDOM from 'react-dom'
import LandingContainer from "./containers/LandingContainer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingContainer />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

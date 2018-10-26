import React, { Component } from 'react'
import Router from './Router'
import NavBar from '../src/components/navbar'

class App extends Component {
   
  render() {
    return (
      <div>
        <NavBar />
        <Router />
      </div>
    )
  }
}

export default App


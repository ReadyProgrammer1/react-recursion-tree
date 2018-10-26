import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

function NavBar() {
  function refreshPage(){ 
    //this is due to a glitch that I cannot figure out where the NodeTree component is being
    //updated with incorrect data while at the same time being equal to null in componentWillMount()
    //a total page refresh is the only fix I have found for this issue.
    window.location.reload()
  }
  return (
    <nav>
      <ul className='top-menu'>
      <li onClick={() => refreshPage()}><NavLink exact to='/react-recursion-tree'>Data Tree</NavLink></li>
      <li><NavLink exact to='/richter'>Richter Scale</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
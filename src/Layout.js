import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/ContactUs'}>Contact Us</Link></li>
                <li><Link to={'/FAQ'}>FAQ</Link></li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Layout
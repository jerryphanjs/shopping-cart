import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="grey darken-3">
        <div className="nav-wrapper" style={{padding: '0 5%'}}>
          <Link to="/" className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;

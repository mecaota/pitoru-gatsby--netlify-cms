import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="多分ムーミン"/>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/products">
          Works
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/mecaota/pitoru-gatsby--netlify-cms"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar

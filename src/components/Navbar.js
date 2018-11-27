import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false // toggleの初期状態を設定
    };
  }
  func(e) {
    this.setState({
      toggle: !this.state.toggle // state.toggleフラグを反転させる
    });
  }
  render() {
    // state.toggleを見てonを結合するか否かを決める
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="多分ムーミン" width="28" height="28"/>
              </figure>
            </Link>
            <Link to="#" role="button" className={this.state.toggle ? "navbar-burger is-active" : "navbar-burger"} onClick={this.func.bind(this)} data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
          <div id="navMenu" className={this.state.toggle ? "navbar-menu is-active" : "navbar-menu"}>
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
    
        </div>
      </nav>
    )
  }
}
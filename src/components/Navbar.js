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
            <div className="tabs is-boxed is-medium">
              <li className=""><Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="多分ムーミン" width="28" height="28"/>
                </figure>
              </Link></li>
              <li className=""><Link className="navbar-item" to="/about">
                About
              </Link></li>
              <li className=""><Link className="navbar-item" to="/products">
                Works
              </Link></li>
              <li className=""><Link className="navbar-item" to="/blog">
                Blog
              </Link></li>
            </div>
          </div>
          <div className="navbar-menu">
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
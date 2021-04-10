const React = require('react')
const ReactDOM = require('react-dom')
const { Link } = require('react-router-dom')

const { site } = require('../constants/site')

const MyHeader = (props) =>
    <div>
        <header className={site.headerClass}>
            <div className="usa-nav-container">
                <div className="usa-navbar">
                    <div className="usa-logo" id="basic-mega-logo">
                        <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home">{site.appName}</a></em>
                    </div>
                    <button className="usa-menu-btn">Menu</button>
                </div>
                <nav aria-label="Primary navigation" className="usa-nav">
                    <button className="usa-nav__close"><img src="assets/img/close.svg" role="img" alt="close" /></button>
                    <ul className="usa-nav__primary usa-accordion">
                        <li className="usa-nav__primary-item">
                            <Link className="usa-nav__link" to="/home"><span>Home</span></Link>
                        </li>
                        <li className="usa-nav__primary-item">
                            <Link className="usa-nav__link" to="nameForm"><span>User Info</span></Link>
                        </li>
                        <li className="usa-nav__primary-item">
                            <a className="usa-nav__link" href="javascript:void(0)"><span>Launch Codes</span></a>
                        </li>
                        <li className="usa-nav__primary-item">
                            <Link className="usa-nav__link" to="/"><span>Login</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>;

module.exports = MyHeader
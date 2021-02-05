const React = require('react')
const ReactDOM = require('react-dom')

const MyHeader = (props) =>
    <header className="usa-header usa-header--basic bg-accent-cool">
        <div className="usa-nav-container">
            <div className="usa-navbar">
                <div className="usa-logo" id="basic-logo">
                    <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home">Project title</a></em>
                </div>
                <button className="usa-menu-btn">Menu</button>
            </div>
            <nav aria-label="Primary navigation" className="usa-nav">
                <button className="usa-nav__close"><img src="assets/img/close.svg" role="img" alt="close" /></button>
                <ul className="usa-nav__primary usa-accordion">
                    <li className="usa-nav__primary-item">
                        <button className="usa-accordion__button usa-nav__link  usa-current" aria-expanded="false"
                            aria-controls="basic-nav-section-one"><span>Current section</span></button>
                        <ul id="basic-nav-section-one" className="usa-nav__submenu">
                            <li className="usa-nav__submenu-item">
                                <a href="#" className=""> Navigation link 1</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="#" className=""> Navigation link 2</a>
                            </li>
 -                           <li className="usa-nav__submenu-item">
                                <a href="#" className=""> Navigation link 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="usa-nav__primary-item">
                        <button className="usa-accordion__button usa-nav__link" aria-expanded="false"
                            aria-controls="basic-nav-section-two"><span>Section</span></button>
                        <ul id="basic-nav-section-two" className="usa-nav__submenu">
                            <li className="usa-nav__submenu-item">
                                <a href="#" className=""> Navigation link A</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="#" className=""> Navigation link B</a>
                            </li>
                            <li className="usa-nav__submenu-item">
                                <a href="#" className=""> Navigation link C</a>
                            </li>
                        </ul>
                    </li>
                    <li className="usa-nav__primary-item">
                        <a className="usa-nav__link" href="javascript:void(0)"><span>Simple link</span></a>
                    </li>
                </ul>
                <form className="usa-search usa-search--small " role="search">
                    <label className="usa-sr-only" htmlFor="basic-search-field-small">Search small</label>
                    <input className="usa-input" id="basic-search-field-small" type="search" name="search" />
                    <button className="usa-button" type="submit"><span className="usa-sr-only">Search</span></button>
                </form>
            </nav>
        </div>
    </header>;

module.exports = MyHeader
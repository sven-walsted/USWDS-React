const React = require('react')
const ReactDOM = require('react-dom')
const { Link } = require('react-router-dom')

const { site } = require('../constants/site')
const UsaMenuItem = require('../components/UsaMenuItem.jsx')

const MyHeader = (props) => {
    const menuItems = props.menu.map((item) => <UsaMenuItem path={item.path} name={item.name} isCurrent={item.isCurrent} />);
    return (
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
                            {menuItems}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>)
};

module.exports = MyHeader
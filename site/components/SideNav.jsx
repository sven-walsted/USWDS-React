const React = require('react')
const ReactDOM = require('react-dom')
const { Link } = require('react-router-dom')

const UsaMenuItem = require('./UsaMenuItem.jsx')

const SideNav = (props) => {
    const menuItems = props.menu.map((item) => <UsaMenuItem path={item.path} name={item.name} isCurrent={item.isCurrent} />);
    return (
        <div className="usa-layout-docs__sidenav desktop:grid-col-3">
            <nav aria-label="Secondary navigation">
                <ul className="usa-sidenav">
                    {menuItems}
                </ul>
            </nav>
        </div>)
};

module.exports = SideNav
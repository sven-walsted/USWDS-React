const React = require('react')
const ReactDOM = require('react-dom')

const SideNav = () => (
    <div className="usa-layout-docs__sidenav desktop:grid-col-3">
        <nav aria-label="Secondary navigation">
            <ul className="usa-sidenav">
                <li className="usa-sidenav__item">
                    <a href="">Reports</a>
                </li>
            </ul>
        </nav>
    </div>
)

module.exports = SideNav
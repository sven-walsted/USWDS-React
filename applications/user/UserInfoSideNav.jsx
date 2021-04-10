const React = require('react')
const ReactDOM = require('react-dom')
const { Link } = require('react-router-dom')

const UserInfoSideNav = () => (
    <div className="usa-layout-docs__sidenav desktop:grid-col-3">
        <nav aria-label="Secondary navigation">
            <ul className="usa-sidenav">
                <li className="usa-sidenav__item">
                    <a href="" className="usa-current">User Info</a>
                    <ul className="usa-sidenav__sublist">
                        <ul className="usa-sidenav__sublist">
                            <li className="usa-sidenav__item">
                                <Link className="usa-sidenav__item usa-current" to="nameForm">User name</Link>
                            </li>
                            <li className="usa-sidenav__item">
                                <Link className="usa-sidenav__item" to="addressForm">Mailing address</Link>
                            </li>
                            <li className="usa-sidenav__item">
                                <a href="">Supporting documents</a>
                            </li>
                            <li className="usa-sidenav__item">
                                <a href="">Signature</a>
                            </li>
                            <li className="usa-sidenav__item">
                                <a href="">Review and submit</a>
                            </li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
)

module.exports = UserInfoSideNav
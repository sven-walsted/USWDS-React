const React = require('react')
const ReactDOM = require('react-dom')

const HomeSideNav = () => (
    <div className="usa-layout-docs__sidenav desktop:grid-col-3">
        <nav aria-label="Secondary navigation">
            <ul className="usa-sidenav">
                <li className="usa-sidenav__item">
                    <a href="" className="usa-current">Home</a>
                    <ul className="usa-sidenav__sublist">
                        <li className="usa-sidenav__item">
                            <a href="">Child link</a>
                        </li>
                        <li className="usa-sidenav__item">
                            <a href="" className="usa-current">Child link</a>
                            <ul className="usa-sidenav__sublist">
                                <li className="usa-sidenav__item">
                                    <a href="">Grandchild link</a>
                                </li>
                                <li className="usa-sidenav__item">
                                    <a href="">Grandchild link</a>
                                </li>
                                <li className="usa-sidenav__item">
                                    <a href="" className="usa-current">Grandchild link</a>
                                </li>
                                <li className="usa-sidenav__item">
                                    <a href="">Grandchild link</a>
                                </li>
                            </ul>
                        </li>
                        <li className="usa-sidenav__item">
                            <a href="">Child link</a>
                        </li>
                        <li className="usa-sidenav__item">
                            <a href="">Child link</a>
                        </li>
                        <li className="usa-sidenav__item">
                            <a href="">Child link</a>
                        </li>
                    </ul>
                </li>
                <li className="usa-sidenav__item">
                    <a href="">Reports</a>
                </li>
            </ul>
        </nav>
    </div>
)

module.exports = HomeSideNav
const React = require('react')
const ReactDOM = require('react-dom')
const { Link } = require('react-router-dom')

/*
 * name
 * path
 * isCurrent
 * isPrimaryNav 
 */
const UsaMenuItem = (props) => {
    const linkClass = (props.isCurrent != undefined && props.isCurrent) ? "usa-nav__link usa-current" : "usa-nav__link"
    return (
        <li className="usa-nav__primary-item">
            <Link className={linkClass} to={props.path}><span>{props.name}</span></Link>
        </li>
    )
}

module.exports = UsaMenuItem
const React = require('react')
const ReactDOM = require('react-dom')

const MyHeader = require('../../site/layouts/my-header.jsx')
const SideNav = require('./SideNav.jsx')
const NameForm = require('./NameForm.jsx')

class Name extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const menu = [
            {name: "Home", path: "/home", isCurrent: false},
            {name: "User Info", path: "/name", isCurrent: true},
            {name: "Login", path: "/", isCurrent: false}
        ]
        return (
            <div>
            <MyHeader menu={menu}/>
            <div className="grid-row grid-gap">
                <SideNav />
                <NameForm />
            </div>
            </div>
        )
    }
}

module.exports = Name
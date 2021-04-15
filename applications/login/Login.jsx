const React = require('react')
const ReactDOM = require('react-dom')

const MyHeader = require('../../site/layouts/my-header.jsx')
const SideNav = require('./SideNav.jsx')
const LoginBody = require('./LoginBody.jsx')

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const menu = [
            {name: "Home", path: "/home", isCurrent: false},
            {name: "User Info", path: "/name", isCurrent: false},
            {name: "Login", path: "/", isCurrent: true}
        ]
        return (
            <div>
                <MyHeader menu={menu} />
                <div className="grid-row grid-gap">
                    <SideNav />
                    <LoginBody />
                </div>
            </div>
        )
    }
}

module.exports = Login
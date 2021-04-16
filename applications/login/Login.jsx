const React = require('react')
const ReactDOM = require('react-dom')

const SideNav = require('../../site/components/SideNav.jsx')
const MyHeader = require('../../site/layouts/my-header.jsx')
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
        ];
        const sideMenu = [];
        return (
            <div>
                <MyHeader menu={menu} />
                <div className="grid-row grid-gap">
                    <SideNav menu={sideMenu}/>
                    <LoginBody />
                </div>
            </div>
        )
    }
}

module.exports = Login
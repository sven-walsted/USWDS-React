const React = require('react')
const ReactDOM = require('react-dom')

const SideNav = require('../../site/components/SideNav.jsx')
const MyHeader = require('../../site/layouts/my-header.jsx')
const HomeBody = require('./HomeBody.jsx')

class Home extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const menu = [
            { name: "Home", path: "/home", isCurrent: true },
            { name: "User Info", path: "/name", isCurrent: false },
            { name: "Login", path: "/", isCurrent: false }
        ];
        const sideMenu = [
            { name: "Home", path: "/home", isCurrent: true },
            { name: "Design principles", path: "/home", isCurrent: false },
            { name: "Components", path: "/home", isCurrent: false },
            { name: "Design tokens", path: "/home", isCurrent: false },
            { name: "Templates", path: "/home", isCurrent: false },
            { name: "About", path: "/home", isCurrent: false }
        ];
        return (
            <div>
                <MyHeader menu={menu} />
                <div className="grid-row grid-gap">
                    <SideNav menu={sideMenu} />
                    <HomeBody />
                </div>
            </div>
        )
    }
}

module.exports = Home
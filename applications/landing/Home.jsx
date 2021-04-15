const React = require('react')
const ReactDOM = require('react-dom')

const MyHeader = require('../../site/layouts/my-header.jsx')
const SideNav = require('./SideNav.jsx')
const HomeBody = require('./HomeBody.jsx')

class Home extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const menu = [
            {name: "Home", path: "/home", isCurrent: true},
            {name: "User Info", path: "/name", isCurrent: false},
            {name: "Login", path: "/", isCurrent: false}
        ]
        return (
            <div>
                <MyHeader menu={menu} />
                <div className="grid-row grid-gap">
                    <SideNav />
                    <HomeBody />
                </div>
            </div>
        )
    }
}

module.exports = Home
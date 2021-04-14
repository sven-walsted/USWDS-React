const React = require('react')
const ReactDOM = require('react-dom')

const SideNav = require('./SideNav.jsx')
const HomeBody = require('./HomeBody.jsx')

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="grid-row grid-gap">
                <SideNav />
                <HomeBody />
            </div>
        )
    }
}

module.exports = Home
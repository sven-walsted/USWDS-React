const React = require('react')
const ReactDOM = require('react-dom')

const SideNav = require('./SideNav.jsx')
const LoginBody = require('./LoginBody.jsx')

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="grid-row grid-gap">
                <SideNav />
                <LoginBody />
            </div>
        )
    }
}

module.exports = Login
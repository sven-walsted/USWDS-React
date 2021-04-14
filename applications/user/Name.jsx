const React = require('react')
const ReactDOM = require('react-dom')

const SideNav = require('./SideNav.jsx')
const NameForm = require('./NameForm.jsx')

class Name extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="grid-row grid-gap">
                <SideNav />
                <NameForm />
            </div>
        )
    }
}

module.exports = Name
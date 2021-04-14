const React = require('react')
const ReactDOM = require('react-dom')

const SideNav = require('./SideNav.jsx')
const AddressForm = require('./AddressForm.jsx')

class Address extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="grid-row grid-gap">
                <SideNav />
                <AddressForm />
            </div>
        )
    }
}

module.exports = Address
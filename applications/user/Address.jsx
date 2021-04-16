const React = require('react')
const ReactDOM = require('react-dom')

const MyHeader = require('../../site/layouts/my-header.jsx')
const SideNav = require('../../site/components/SideNav.jsx')
const AddressForm = require('./AddressForm.jsx')

class Address extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const menu = [
            {name: "Home", path: "/home", isCurrent: false},
            {name: "User Info", path: "/name", isCurrent: true},
            {name: "Login", path: "/", isCurrent: false}
        ];
        const sideMenu = [
            { name: "User name", path: "/name", isCurrent: false },
            { name: "Mailing Address", path: "/address", isCurrent: true },
            { name: "Supporting documents", path: "/address", isCurrent: false },
            { name: "Signature", path: "/address", isCurrent: false },
            { name: "Review and submit", path: "/address", isCurrent: false }
        ];
        return (
            <div>
                <MyHeader menu={menu}/>
                <div className="grid-row grid-gap">
                    <SideNav menu={sideMenu}/>
                    <AddressForm />
                </div>
            </div>
        )
    }
}

module.exports = Address
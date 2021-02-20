const React = require('react')
const ReactDOM = require('react-dom')
const { Route, Switch } = require('react-router-dom')

const MyBody = require('./my-body.jsx')
const HomeSideNav = require('./HomeSideNav.jsx')
const HomeBody = require('./HomeBody.jsx')
const LoginSideNav = require('./LoginSideNav.jsx')
const LoginBody = require('./LoginBody.jsx')
const UserInfoSideNav = require('./UserInfoSideNav.jsx')
const NameForm = require('./NameForm.jsx')
const AddressForm = require('./AddressForm.jsx')

const Main = () => (
  <div>
    { /* Grid */}
    <div className="usa-section">
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <Switch>
          <Route exact path='/'>
              <LoginSideNav />
            </Route>
            <Route exact path='/home'>
              <HomeSideNav />
            </Route>
            <Route exact path='/nameForm'>
              <UserInfoSideNav />
            </Route>
            <Route exact path='/addressForm'>
              <UserInfoSideNav />
            </Route>
          </Switch>
          { /* Body */}
          <Switch>
            <Route exact path='/'>
              <LoginBody />
            </Route>
            <Route exact path='/home'>
              <HomeBody />
            </Route>
            <Route exact path='/nameForm'>
              <NameForm />
            </Route>
            <Route exact path='/addressForm'>
              <AddressForm />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </div >
)

module.exports = Main
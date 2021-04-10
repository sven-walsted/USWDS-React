const React = require('react')
const ReactDOM = require('react-dom')
const { Route, Switch } = require('react-router-dom')

const HomeSideNav = require('./landing/HomeSideNav.jsx')
const HomeBody = require('./landing/HomeBody.jsx')
const LoginSideNav = require('./login/LoginSideNav.jsx')
const LoginBody = require('./login/LoginBody.jsx')
const UserInfoSideNav = require('./user/UserInfoSideNav.jsx')
const NameForm = require('./user/NameForm.jsx')
const AddressForm = require('./user/AddressForm.jsx')

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
const React = require('react')
const ReactDOM = require('react-dom')
const { Route } = require('react-router-dom')
const { Switch } = require('react-router-dom')

const MyBody = require('./my-body.jsx')
const HomeSideNav = require('./HomeSideNav.jsx')
const HomeBody = require('./HomeBody.jsx')
const LoginBody = require('./LoginBody.jsx')

const Main = () => (
  <div>
    { /* Grid */}
    <div className="usa-section">
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <Switch>
            <Route exact path='/' component={HomeSideNav} />
          </Switch>
          <Switch>
            <Route exact path='/' component={HomeBody} />
            <Route exact path='/login' component={LoginBody} />
          </Switch>
        </div>
      </div>
    </div>
  </div >
)

module.exports = Main
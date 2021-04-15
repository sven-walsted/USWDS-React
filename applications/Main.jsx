const React = require('react')
const ReactDOM = require('react-dom')
const { Route, Switch } = require('react-router-dom')

const Home = require('./landing/Home.jsx')
const Login = require('./login/Login.jsx')
const Name = require('./user/Name.jsx')
const Address = require('./user/Address.jsx')

const Main = () => (
  <div>
    { /* Grid */}
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/name'>
        <Name />
      </Route>
      <Route exact path='/address'>
        <Address />
      </Route>
    </Switch>
  </div>
)

module.exports = Main
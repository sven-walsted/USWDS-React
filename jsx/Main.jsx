const React = require('react')
const ReactDOM = require('react-dom')
const { BrowserRouter } = require('react-router-dom')
const { Switch } = require('react-router-dom')
const MyBody = require('./my-body.jsx')
// const OrigMain = require('./orig-main.jsx')

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MyBody}/>
    </Switch>
  </main>
)

module.exports = Main
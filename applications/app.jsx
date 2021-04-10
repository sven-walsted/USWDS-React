require('../css/main.css')

const React = require('react')
const ReactDOM = require('react-dom')
const { BrowserRouter } = require('react-router-dom')
const Content = require('./content.jsx')

ReactDOM.render((
  <BrowserRouter>
    <Content />
  </BrowserRouter>
),
  document.getElementById('content')
)

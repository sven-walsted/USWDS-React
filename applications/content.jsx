const React = require('react')
const ReactDOM = require('react-dom')

const MyBanner = require('../site/layouts/my-banner.jsx')
const MyHeader = require('../site/layouts/my-header.jsx')
const Main = require('./Main.jsx')
const MyFooter = require('../site/layouts/my-footer.jsx')

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(event) {
    console.log('Sumit clicked; no action')
  }
  render() {
    return (
      <div className="content">
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <MyBanner />
        { /* Shades page when mini-menu is active */}
        <div className="usa-overlay"></div>
        <Main />
        <MyFooter />
      </div>
    )
  }
}

module.exports = Content
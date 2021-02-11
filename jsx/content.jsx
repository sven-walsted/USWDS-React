const React = require('react')
const ReactDOM = require('react-dom')

const MyBanner = require('./my-banner.jsx')
const MyHeader = require('./my-header.jsx')
const OrigMain = require('./orig-main.jsx')
const MyFooter = require('./my-footer.jsx')
const MyBody = require('./my-body.jsx')

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
        <MyHeader />
        <MyBody />
        <MyFooter />
      </div>
    )
  }
}

module.exports = Content
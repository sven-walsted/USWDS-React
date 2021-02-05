const React = require('react')
const ReactDOM = require('react-dom')

const MyHeader = require('./my-header.jsx')
const OrigMain = require('./orig-main.jsx')
const MyFooter = require('./my-footer.jsx')

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(event) {
    console.log('Sumit clicked; no action')
  }
  render() {
    this.prompt = 'Please enter your email to win a Sublime Text license'
    return (

      <div className="container">

        <MyHeader />
        <OrigMain />
        <MyFooter />
        
      </div>
    )
  }
}

module.exports = Content
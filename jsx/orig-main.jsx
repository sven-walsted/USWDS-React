const React = require('react')
const ReactDOM = require('react-dom')

const OrigMain = (props) =>

    <main>
        <p>{this.prompt}</p>
        <div className="form-group">
            Email: <input className="form-control" type="text" placeholder="hi@azat.co" />
        </div>
        <div className="form-group">
            Comments: <textarea className="form-control" placeholder="email-webpack" />
        </div>
        <div className="form-group">
            <a className="btn btn-primary">Submit</a>
        </div>
    </main>;

module.exports = OrigMain
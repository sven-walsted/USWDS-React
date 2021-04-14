const React = require('react')
const ReactDOM = require('react-dom')

const UserStepIndicator = (props) => (

  <div className="usa-step-indicator usa-step-indicator--counters-sm" aria-label="progress">
    <ol className="usa-step-indicator__segments">
      {props.steps.map((step) => {
        return <li className={step.usaStyle} key={step.name}>
          <span className="usa-step-indicator__segment-label">{step.name}</span>
        </li>
      }
      )}
    </ol>
  </div>
)

module.exports = UserStepIndicator
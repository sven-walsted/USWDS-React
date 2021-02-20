const React = require('react')
const ReactDOM = require('react-dom')

const UserStepIndicator = require('./UserStepIndicator.jsx')

class NameForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // values: usa-step-indicator__segment--complete, usa-step-indicator__segment--current, ''
            steps: [
                { name: 'User name', usaStyle: "usa-step-indicator__segment usa-step-indicator__segment--current" },
                { name: 'Mailing address', usaStyle: "usa-step-indicator__segment" },
                { name: 'Supporting documents', usaStyle: 'usa-step-indicator__segment' },
                { name: 'Signature', usaStyle: 'usa-step-indicator__segment' },
                { name: 'Review and submit', usaStyle: 'usa-step-indicator__segment' }
            ]
        }
    }
    render() {
        return (
            <main id="main-content" className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs">
                <div className="bg-accent-cool-lighter">

                    <section className="grid-container">

                        <div className="grid-row flex-justify-left bg-white">
                            <div className="tablet:grid-col-8 desktop:grid-col-12 padding-x-5 padding-y-2">
                                <UserStepIndicator {...this.state} />
                            </div>
                        </div>
                        <div className="grid-row flex-justify-left bg-white">
                            <div className="tablet:grid-col-8 desktop:grid-col-12 ">

                                <div className="bg-white padding-y-2 padding-x-5">

                                    <form className="usa-form" action="addressForm">
                                        <fieldset className="usa-fieldset">
                                            <legend className="usa-legend usa-legend--large">User name</legend>
                                            <label className="usa-label" htmlFor="title">Title <span className="usa-hint">(optional)</span></label>
                                            <input className="usa-input usa-input--small" id="title" name="title" type="text" />

                                            <label className="usa-label" htmlFor="first-name">First name</label>
                                            <input className="usa-input" id="first-name" name="first-name" type="text" required aria-required="true" />

                                            <label className="usa-label" htmlFor="middle-name">Middle name <span className="usa-hint">(optional)</span></label>
                                            <input className="usa-input" id="middle-name" name="middle-name" type="text" />

                                            <label className="usa-label" htmlFor="last-name">Last name</label>
                                            <input className="usa-input" id="last-name" name="last-name" type="text" required aria-required="true" />

                                            <ul className="usa-button-group">
                                                <li className="usa-button-group__item">
                                                    <a href="#" className="usa-button usa-button--outline">Back</a>
                                                </li>
                                                <li className="usa-button-group__item">
                                                    <button className="usa-button">Continue</button>
                                                </li>
                                            </ul>

                                        </fieldset>
                                    </form>



                                </div>


                            </div>
                        </div>
                    </section>

                </div>
            </main >

        )
    }
}

module.exports = NameForm
const React = require('react')
const ReactDOM = require('react-dom')

const UserStepIndicator = require('./UserStepIndicator.jsx')

class AddressForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // values: usa-step-indicator__segment--complete, usa-step-indicator__segment--current, ''
            steps: [
                { name: 'User name', usaStyle: "usa-step-indicator__segment usa-step-indicator__segment--complete" },
                { name: 'Mailing address', usaStyle: "usa-step-indicator__segment usa-step-indicator__segment--current" },
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

                                    <form className="usa-form usa-form--large">
                                        <fieldset className="usa-fieldset">
                                            <legend className="usa-legend usa-legend--large">Mailing address</legend>
                                            <p>
                                                Required fields are marked with an asterisk (<abbr title="required" className="usa-hint usa-hint--required">*</abbr>).
                                            </p>
                                            <label className="usa-label" htmlFor="mailing-address-1">
                                                Street address <abbr title="required" className="usa-hint usa-hint--required">*</abbr>
                                            </label>
                                            <input className="usa-input" id="mailing-address-1" name="mailing-address-1" type="text" required />

                                            <div className="grid-row grid-gap">
                                                <div className="mobile-lg:grid-col-8">
                                                    <label className="usa-label" htmlFor="apt-suite-other">Unit type</label>
                                                    <div className="usa-combo-box">
                                                        <select className="usa-select" id="apt-suite-other" name="apt-suite-other">
                                                            <option value>- Select -</option>
                                                            <option value="APT">APT - Apartment</option>
                                                            <option value="BSMT">BSMT - Basement</option>
                                                            <option value="BLDG">BLDG - Building</option>
                                                            <option value="DEPT">DEPT - Department</option>
                                                            <option value="FL">FL - Floor</option>
                                                            <option value="FRNT">FRNT - Front</option>
                                                            <option value="HNGR">HNGR - Hanger</option>
                                                            <option value="KEY">KEY - Key</option>
                                                            <option value="LBBY">LBBY - Lobby</option>
                                                            <option value="LOT">LOT - Lot</option>
                                                            <option value="LOWR">LOWR - Lower</option>
                                                            <option value="OFC">OFC - Office</option>
                                                            <option value="OTHER">Other</option>
                                                            <option value="PH">PH - Penthouse</option>
                                                            <option value="PIER">PIER - Pier</option>
                                                            <option value="REAR">REAR - Rear</option>
                                                            <option value="RM">RM - Room</option>
                                                            <option value="SIDE">SIDE - Side</option>
                                                            <option value="SLIP">SLIP - Slip</option>
                                                            <option value="SPC">SPC - Space</option>
                                                            <option value="STOP">STOP - Stop</option>
                                                            <option value="STE">STE - Suite</option>
                                                            <option value="TRLR">TRLR - Trailer</option>
                                                            <option value="UNAVAILABLE">Unable to determine</option>
                                                            <option value="UNIT">UNIT - Unit</option>
                                                            <option value="UPPR">UPPR - Upper</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mobile-lg:grid-col-4">
                                                    <label className="usa-label" htmlFor="apt-floor-suite-no">Unit number</label>
                                                    <input className="usa-input" id="apt-floor-suite-no" name="apt-floor-suite-no" type="text" />
                                                </div>
                                            </div>

                                            <label className="usa-label" htmlFor="city">City <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
                                            <input className="usa-input" id="city" name="city" type="text" required />

                                            <label className="usa-label" htmlFor="state">State <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
                                            <div className="usa-combo-box">
                                                <select className="usa-select" id="state" name="state" required>
                                                    <option value>- Select -</option>
                                                    <option value="AL">AL - Alabama</option>
                                                    <option value="AK">AK - Alaska</option>
                                                    <option value="AS">AS - American Samoa</option>
                                                    <option value="AZ">AZ - Arizona</option>
                                                    <option value="AR">AR - Arkansas</option>
                                                    <option value="CA">CA - California</option>
                                                    <option value="CO">CO - Colorado</option>
                                                    <option value="CT">CT - Connecticut</option>
                                                    <option value="DE">DE - Delaware</option>
                                                    <option value="DC">DC - District of Columbia</option>
                                                    <option value="FL">FL - Florida</option>
                                                    <option value="GA">GA - Georgia</option>
                                                    <option value="GU">GU - Guam</option>
                                                    <option value="HI">HI - Hawaii</option>
                                                    <option value="ID">ID - Idaho</option>
                                                    <option value="IL">IL - Illinois</option>
                                                    <option value="IN">IN - Indiana</option>
                                                    <option value="IA">IA - Iowa</option>
                                                    <option value="KS">KS - Kansas</option>
                                                    <option value="KY">KY - Kentucky</option>
                                                    <option value="LA">LA - Louisiana</option>
                                                    <option value="ME">ME - Maine</option>
                                                    <option value="MD">MD - Maryland</option>
                                                    <option value="MA">MA - Massachusetts</option>
                                                    <option value="MI">MI - Michigan</option>
                                                    <option value="MN">MN - Minnesota</option>
                                                    <option value="MS">MS - Mississippi</option>
                                                    <option value="MO">MO - Missouri</option>
                                                    <option value="MT">MT - Montana</option>
                                                    <option value="NE">NE - Nebraska</option>
                                                    <option value="NV">NV - Nevada</option>
                                                    <option value="NH">NH - New Hampshire</option>
                                                    <option value="NJ">NJ - New Jersey</option>
                                                    <option value="NM">NM - New Mexico</option>
                                                    <option value="NY">NY - New York</option>
                                                    <option value="NC">NC - North Carolina</option>
                                                    <option value="ND">ND - North Dakota</option>
                                                    <option value="MP">MP - Northern Mariana Islands</option>
                                                    <option value="OH">OH - Ohio</option>
                                                    <option value="OK">OK - Oklahoma</option>
                                                    <option value="OR">OR - Oregon</option>
                                                    <option value="PA">PA - Pennsylvania</option>
                                                    <option value="PR">PR - Puerto Rico</option>
                                                    <option value="RI">RI - Rhode Island</option>
                                                    <option value="SC">SC - South Carolina</option>
                                                    <option value="SD">SD - South Dakota</option>
                                                    <option value="TN">TN - Tennessee</option>
                                                    <option value="TX">TX - Texas</option>
                                                    <option value="UM">UM - United States Minor Outlying Islands</option>
                                                    <option value="UT">UT - Utah</option>
                                                    <option value="VT">VT - Vermont</option>
                                                    <option value="VI">VI - Virgin Islands</option>
                                                    <option value="VA">VA - Virginia</option>
                                                    <option value="WA">WA - Washington</option>
                                                    <option value="WV">WV - West Virginia</option>
                                                    <option value="WI">WI - Wisconsin</option>
                                                    <option value="WY">WY - Wyoming</option>
                                                    <option value="AA">AA - Armed Forces Americas</option>
                                                    <option value="AE">AE - Armed Forces Africa</option>
                                                    <option value="AE">AE - Armed Forces Canada</option>
                                                    <option value="AE">AE - Armed Forces Europe</option>
                                                    <option value="AE">AE - Armed Forces Middle East</option>
                                                    <option value="AP">AP - Armed Forces Pacific</option>
                                                </select>
                                            </div>

                                            <label className="usa-label" htmlFor="zip">ZIP code <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
                                            <input className="usa-input usa-input--medium" id="zip" name="zip" type="text" pattern="[\d]{5}(-[\d]{4})?" required />
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

module.exports = AddressForm
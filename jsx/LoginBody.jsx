const React = require('react')
const ReactDOM = require('react-dom')

const LoginBody = () => (
    <main id="main-content" className="usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs">
        <div className="bg-accent-cool-lighter">
            <section className="grid-container usa-section">
                <div className="grid-row flex-justify-center">
                    <div className="grid-col-12 tablet:grid-col-8 desktop:grid-col-6">
                        <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                            <h1 className="margin-bottom-0">Sign in</h1>
                            <form className="usa-form" action="/">
                                <fieldset className="usa-fieldset">
                                    <legend className="usa-legend margin-top-1">Access your account.</legend>
                                    <label className="usa-label" htmlFor="email">Email address</label>
                                    <input className="usa-input" id="email" name="email" type="email" autoCapitalize="off" autoCorrect="off" required />
                                    <label className="usa-label" htmlFor="password-sign-in">Password</label>
                                    <input className="usa-input" id="password-sign-in" name="password" type="password" required />
                                    <p className="usa-form__note">
                                        <a title="Show password" href="javascript:void(0);"
                                            className="usa-show-password"
                                            aria-controls="password-sign-in">Show password</a>
                                    </p>
                                    <input className="usa-button" type="submit" value="Sign in" />
                                    <p><a href="javascript:void(0);" title="Forgot password">
                                        Forgot password?</a></p>
                                </fieldset>
                            </form>
                        </div>
                        <p className="text-center">Don’t have an account? <a className="usa-link" href="javascript:void(0);">Create your account now</a>.</p>
                        <div className="border-top border-base-lighter margin-top-3 padding-top-1">
                            <h2>Are you a federal employee?</h2>
                            <div className="usa-prose">
                                <p>If you are a federal employee or [other secondary user], please use [secondary Single Sign On (SSO)].</p>
                                <p><a className="usa-button usa-button--outline" href="javascript:void()">Launch secondary SSO</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
)

module.exports = LoginBody
const React = require('react')
const ReactDOM = require('react-dom')

const { site } = require('../constants/site')

const MyFooter = (props) =>
    <div>

        <footer className="usa-footer">
            <div className="grid-container usa-footer__return-to-top">
                <a href="#">Return to top</a>
            </div>
            <div className={site.primaryFooterClass}>
                <nav className="usa-footer__nav" aria-label="Footer navigation">
                    <ul className="grid-row grid-gap">
                        <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                            <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                        </li>
                        <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                            <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                        </li>
                        <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                            <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                        </li>
                        <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                            <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                        </li>
                        <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                            <a className="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={site.secondaryFooterClass}>
                <div className="grid-container">
                    <div className="grid-row grid-gap">
                        <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                            <div className="mobile-lg:grid-col-auto">
                                <img className="usa-footer__logo-img" src="../assets/img/logo-img.png" alt="" />
                            </div>
                            <div className="mobile-lg:grid-col-auto">
                                <h3 className="usa-footer__logo-heading">{site.agencyName}</h3>
                            </div>
                        </div>
                        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                            <div className="usa-footer__social-links grid-row grid-gap-1">
                                <div className="grid-col-auto">
                                    <a className="usa-social-link usa-social-link--facebook" href="javascript:void(0);">
                                        <span>Facebook</span>
                                    </a>
                                </div>
                                <div className="grid-col-auto">
                                    <a className="usa-social-link usa-social-link--twitter" href="javascript:void(0);">
                                        <span>Twitter</span>
                                    </a>
                                </div>
                                <div className="grid-col-auto">
                                    <a className="usa-social-link usa-social-link--youtube" href="javascript:void(0);">
                                        <span>YouTube</span>
                                    </a>
                                </div>
                                <div className="grid-col-auto">
                                    <a className="usa-social-link usa-social-link--rss" href="javascript:void(0);">
                                        <span>RSS</span>
                                    </a>
                                </div>
                            </div>
                            <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
                            <address className="usa-footer__address">
                                <div className="usa-footer__contact-info grid-row grid-gap">
                                    <div className="grid-col-auto">
                                        <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                                    </div>
                                    <div className="grid-col-auto">
                                        <a href="mailto:info@agency.gov">info@agency.gov</a>
                                    </div>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="usa-identifier">
            <section className="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier">
                <div className="usa-identifier__container">
                    <div className="usa-identifier__logos">
                        <a href="javascript:void(0);" className="usa-identifier__logo">
                            <img className="usa-identifier__logo-img" src="../assets/img/circle-gray-20.svg"
                                alt="&lt;Parent agency&gt; logo" role="img" />
                        </a>
                    </div>
                    <div className="usa-identifier__identity" aria-label="Agency description">
                        <p className="usa-identifier__identity-domain">domain.gov</p>
                        <p className="usa-identifier__identity-disclaimer">An official website of the <a
                            href="javascript:void(0);">{site.agencyDepartment}</a></p>
                    </div>
                </div>
            </section>
            <nav className="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links">
                <div className="usa-identifier__container">
                    <ul className="usa-identifier__required-links-list">
                        <li className="usa-identifier__required-links-item">
                            <a href="javascript:void(0);" className="usa-identifier__required-link">About &lt;Parent
                            shortname&gt;</a>
                        </li>
                        <li className="usa-identifier__required-links-item">
                            <a href="javascript:void(0);" className="usa-identifier__required-link">Accessibility support</a>
                        </li>
                        <li className="usa-identifier__required-links-item">
                            <a href="javascript:void(0);" className="usa-identifier__required-link usa-link">FOIA requests</a>
                        </li>
                        <li className="usa-identifier__required-links-item">
                            <a href="javascript:void(0);" className="usa-identifier__required-link usa-link">No FEAR Act
                            data</a>
                        </li>
                        <li className="usa-identifier__required-links-item">
                            <a href="javascript:void(0);" className="usa-identifier__required-link usa-link">Office of the
                            Inspector General</a>
                        </li>
                        <li className="usa-identifier__required-links-item">
                            <a href="javascript:void(0);" className="usa-identifier__required-link usa-link">Performance
                            reports</a>
                        </li>
                        <li className="usa-identifier__required-links-item">
                            <a href="javascript:void(0);" className="usa-identifier__required-link usa-link">Privacy policy</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="usa-identifier__section usa-identifier__section--usagov"
                aria-label="U.S. government information and services">
                <div className="usa-identifier__container">
                    <div className="usa-identifier__usagov-description">Looking for U.S. government information and services?
                </div>
                    <a href="https://www.usa.gov/" className="usa-link">Visit USA.gov</a>
                </div>
            </section>
        </div>
        { /* closing Container */}
    </div>;

module.exports = MyFooter
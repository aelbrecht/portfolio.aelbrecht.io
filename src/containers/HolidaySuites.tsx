import React, {FC} from "react"
import topology from "../images/hs-topology.svg";
import Link from "./Link";

const HolidaySuites: FC = () => (
    <section className="work-story-container">
        <div className="story-body">
            <div className="story-padding">
                <h3 id="holiday-suites" className="work-title work-icon-hs">Holiday Suites</h3>
                <p><b>Web Developer | 2016 - 2018</b></p>
                <p className="story-text">
                    <h5 className="mb-0">Payment platform integration | 2016</h5>
                    <br/>
                    Build a payment page and integrate it into the existing checkout process. Previously a CC form was
                    present on the checkout page, this was replaced with the integration
                    of <Link to="https://www.ingenico.com/">Ingenico</Link>.
                    The backend was modified to be able to redirect users to their payment page and confirm the payment
                    with a feedback call.
                </p>
                <p>
                    <h5 className="mb-0">Internal platform | 2016 - 2018</h5>
                    <br/>
                    Expanding on the payment integration I built an admin page on which management could view
                    transactions and feedback status. The admin platform was a custom built PHP website using
                    Bootstrap as a base. Over the time span of two years some core services were added to this platform
                    or replaced existing services provided originally by the WordPress theme. I designed the database
                    layout that was used to handle all web related bookings that would then be synced up with the
                    primary booking system. Holiday Suites has since replaced all web-related services with an
                    outsourced solution.
                    <br/>
                </p>
                <p>
                    <h5 className="mb-0">Checkout, promo codes and gift cards</h5>
                    <br/>
                    Fully customizable promo codes which could be applied with a variety of restriction.
                    Purchasing of gift cards was added that would then be sent to the recipient via email. These could
                    be used as promo codes but are applied as a partial payment method.
                </p>
                <p>
                    <h5 className="mb-0">Events, accommodations and blog posts</h5>
                    <br/>
                    Some small content pages were replaced to provide a more modern layout. Editors were added to
                    replace the existing slow editors which the WordPress theme provided.
                </p>
                <p>
                    <h5 className="mb-0">Inventory system</h5>
                    <br/>
                    Package deals were introduced which were custom pages on which bookings could be made with
                    certain perks like tickets or free items. The price and inclusion of these items could be fully
                    customized in a pseudo-programming languages to limit a booking to a number of constraints. An
                    inventory system kept track of how many items were still in stock to track availability.
                </p>
            </div>
        </div>
        <div className="story-image ">
            <div className="story-padding ">
                <img
                    src={topology}
                    className="story-image-display"
                    alt="hs topology"
                />
                <p>Implemented features overview</p>
                <img
                    src="https://static.aelbrecht.io/portfolio/hs-promo-code.png"
                    className="story-image-display"
                    alt="hs promo code"
                />
                <p>Promo code editor</p>
                <img
                    src="https://static.aelbrecht.io/portfolio/hs-modify.png"
                    className="story-image-display"
                    alt="hs price editor"
                />
                <p>Dynamic price editor</p>
            </div>
        </div>
    </section>
)

export default HolidaySuites

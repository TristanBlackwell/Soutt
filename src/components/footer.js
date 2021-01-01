import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div id="footerArea">
            <section id="ContactSection" className="wave wave-top" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h1 id="ContactTitle">Let's get it on!</h1>
                        </div>
                        <div className="col l6 s12" id="ContactInfo">
                            <h4>Interested in working together?</h4>
                            <p>If you've got all the way to this point why not send an email?
                                I'm taking on projects right now so would love to hear some ideas
                                and get creating!
                            </p>
                            <Link to="/contact">
                                <div id="ContactButton">Get in touch</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
                <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l4 s12" id="footerArea">
                        <h5 className="footerTitle">
                            Areas
                        </h5>
                        <p>Living in Oxford, I service the city and surrounding areas.
                            I am also open to remote work so if this is applicable I would be happy to discuss.
                        </p>
                    </div>
                    <div className="col l4 s12" id="footerServices">
                        <h5 className="footerTitle">
                            Services
                        </h5>
                        <ul>
                            <li><Link to="/services/0">Web Design</Link></li>
                            <li><Link to="/services/1">Web Development</Link></li>
                            <li><Link to="/services/2">Ecommerce Functionality</Link></li>
                            <li><Link to="/services/3">Servicing Contracts</Link></li>
                            <li><Link to="/services/4">Copywriting</Link></li>
                            <li><Link to="/services/5">Online Presence/SEO</Link></li>

                        </ul>
                    </div>
                    <div className="col l4 s12" id="footerContact">
                        <h5 className="footerTitle">
                            Contact
                        </h5>
                        <a href="mailto:tristan@soutt.co.uk">
                            <p>Info@developer.com</p>
                        </a>
                        <a href="tel:07851934397">
                            <p>07567 375491</p>
                        </a>
                    </div>
                </div>
                </div>
            <div className="footer-copyright">
                <div className="container">
                © 2020 Copyright Soutt
                <a className="grey-text text-lighten-4 right" href="#!">N/A</a>
                </div>
            </div>
            </footer>
        </div>
    )
}
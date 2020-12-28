
export default function Footer() {

    return (
        <div id="footerArea">
            <section id="ContactSection" className="wave wave-top" data-aos="fade-up">
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
                                <div id="ContactButton">Get in touch</div>
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
                            <li>Web Design</li>
                            <li>Web Development</li>
                            <li>Servicing Contracts</li>
                            <li>Online Presence/SEO</li>
                        </ul>
                    </div>
                    <div className="col l4 s12" id="footerContact">
                        <h5 className="footerTitle">
                            Contact
                        </h5>
                        <p>Info@developer.com</p>
                        <p>07567 375491</p>
                    </div>
                </div>
                </div>
            <div className="footer-copyright">
                <div className="container">
                © 2020 Copyright Tristan Blackwell
                <a className="grey-text text-lighten-4 right" href="#!">N/A</a>
                </div>
            </div>
            </footer>
        </div>
    )
}
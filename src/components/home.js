
import plans from "../images/plans.jpg";

export default function Home() {

    return (
        <div id="homePage">
            <section id="heroSection">
                <div id="heroContent">
                    <h1>Bespoke freelance web<br /> design and development</h1>
                    <p><em>I'm Tristan, an Oxford based web designer helping individuals &
                        businesses solve their problems with creative, forward thinking.</em>
                    </p>
                    <div id="heroButtons">
                        <div id="touch" className="heroButton"><em>Get in touch</em></div>
                        <div id="process" className="heroButton"><em>See my process</em></div>
                    </div>
                </div>
                <div id="heroBrief">
                    <div id="leftBrief">
                        <h3>Freelance web designer</h3>
                        <p>My name is Tristan, I'm a Computer Science student and freelance developer
                            helping clients from all different areas to improve their online presence,
                            innovate solutions and build fast & effiecent web apps tailored to each case
                            to advance progress on both sides.
                            <br />
                            See some of the <a href="#work">work</a> I have done.
                        </p>
                    </div>
                    <div id="rightBrief">
                        <h5>Have an idea that needs executing?</h5>
                        <p>I am currently taking on work. Get in touch for us to share thoughts.</p>
                        <a href="#contact">07567 375491</a>
                        <br />
                        <a href="#contact">info@developer.com</a>
                    </div>
                </div>
            </section>
            <section id="homeWorkSection" className="container">
                <h2>Recent work</h2>
                <div className="strike"></div>
                <div id="homeWorkExamples">
                    <div className="workExample">Work 1</div>
                    <div className="workExample">Work 2</div>
                    <div className="workExample">Work 3</div>
                </div>
            </section>
            <div id="homeAbout" className="container">
                <div id="homeAboutContent">
                    <img id="plansImg" src={plans} />
                    <div id="contentText">
                        <h3>About Tristan</h3>
                        <div className="strike"></div>
                        <p>As a designer & developer that never stops learning, I am to
                            create the most beautiful sites I am capable of for every
                            single client I work with. To complement the beauty, I insure
                            maximal speed that does not compromise in any aspect.
                        </p>
                        <div id="homeAboutButton">Discover more about me</div>
                    </div>
                </div>
            </div>
            <section id="homeProcessSection">
                <div className="container">
                    <h2>"Digital design is like painting, except the paint never dries."</h2>
                    <div className="strike"></div>
                    <ol id="processList">
                        <li className="process">Research & Development</li>
                        <li className="process">Templating & Wireframing</li>
                        <li className="process">Development Process</li>
                        <li className="process">Continous Deployment</li>
                    </ol>
                </div>
            </section>
            <section id="homeContactSection" className="wave wave-top">
                    <div className="row">
                        <div className="col l6 s12">
                            <h1 id="homeContactTitle">Let's get it on!</h1>
                        </div>
                        <div className="col l6 s12" id="homeContactInfo">
                            <h4>Interested in working together?</h4>
                            <p>If you've got all the way to this point why not send an email?
                                I'm taking on projects right now so would love to hear some ideas
                                and get creating!
                            </p>
                            <div id="homeContactButton">Get in touch</div>
                        </div>
                    </div>
            </section>
            <footer class="page-footer">
          <div class="container">
            <div class="row">
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
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright Tristan Blackwell
            <a class="grey-text text-lighten-4 right" href="#!">N/A</a>
            </div>
          </div>
        </footer>
        </div>
    )
}
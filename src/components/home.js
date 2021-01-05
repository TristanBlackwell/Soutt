import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import plans from "../images/plans.jpg";

import Navbar from "./navbarHome";
import RecentBanner from "./recentBanner";

import FlawlessQuote from "./quotes/flawlessQuote";
import BodyevoQuote from "./quotes/bodyevoQuote";

const Home = (props) => {

    useEffect(() => {
        if (window.loc !== window.location.pathname) {
            window.gtag("config", process.env.REACT_APP_TRACKING_ID, {
                page_title: window.location.pathname.slice(1, window.location.pathname.length)
            })
        }
    })

    return (
        <div id="homePage">
            <Navbar />
            <section id="heroSection">
                <div id="heroContent">
                    <h1>Bespoke freelance web<br /> design and development</h1>
                    <p><em>I'm Tristan, an Oxford based web designer helping individuals &
                        businesses solve their problems with creative, forward thinking.</em>
                    </p>
                    <div id="heroButtons">
                        <Link to="/contact">
                            <div id="touch" className="heroButton"><em>Get In Touch</em></div>
                        </Link>
                        <ScrollLink to="homeProcessSection" smooth={true}>
                         <div id="process" className="heroButton"><em>See My Process</em></div>
                        </ScrollLink>
                    </div>
                </div>
                <div id="heroBrief" data-aos="fade-left">
                    <div id="leftBrief">
                        <h3>Freelance Web Designer</h3>
                        <p>My name is Tristan, I'm a Computer Science student and freelance developer
                            helping clients improve their online presence,
                            innovate solutions and build fast & efficient web apps tailored to each case
                            to go further online.
                            <br />
                            View some of the <Link to="/work">work</Link> I have done.
                        </p>
                    </div>
                    <div id="rightBrief">
                        <h5>Have an idea that needs executing?</h5>
                        <p>I am currently taking on work. Get in touch and share some ideas.</p>
                        <a href="tel:07851934397">07851 934397</a>
                        <br />
                        <a href="mailto:tristan@soutt.co.uk">Tristan@soutt.co.uk</a>
                    </div>
                </div>
            </section>
            <section id="homeWorkSection" data-aos="fade-down">
                <div className="container">
                    <h2>Recent Work</h2>
                    <div className="strike"></div>
                    <div id="homeWorkExamples" className="row">
                        {props.examples.map((example, index) => {
                            return (
                                <div className="col s12 m6 l4 center" key={example.name}>
                                    <Link to={"/work/" + index}>
                                        <div className="workExample">
                                            <img  className="exampleThumbnail" src={example.thumbnail.url} alt="logo" />
                                            <h5 className="exampleName">{example.name}</h5>
                                            <p className="exampleTag">{example.tagline}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section id="reviewSection">
                <div className="row container">
                    <div className="col s12 m12 l5 reviewContainer">
                        <FlawlessQuote />
                    </div>
                    <div className="col s12 m12 l5 offset-l1 reviewContainer">
                        <BodyevoQuote />
                    </div>
                </div>
            </section>
            <div id="homeAbout" className="container" data-aos="fade-left">
                <div id="homeAboutContent">
                    <img id="plansImg" src={plans} alt="wireframe" />
                    <div id="contentText" className="row">
                        <h3>About Tristan</h3>
                        <div className="strike"></div>
                        <p>As a designer & developer that never stops learning, I aim to
                            create beautiful sites for every
                            single client I work with, complemented by the
                            maximum performance that does not compromise in any aspect to
                            take you a step ahead of everyone else.
                        </p>
                        <Link to="/about">
                            <div id="homeAboutButton">Discover More About Me</div>
                        </Link>
                    </div>
                </div>
            </div>
            <section id="homeProcessSection" data-aos="zoom-in">
                <div className="container">
                    <h2>"Digital design is like painting, except the paint never dries."</h2>
                    <div className="strike"></div>
                    <ol id="processList">
                        <li className="process">
                            <p>Research & Development</p>
                            <p className="processDescription">The building doesn't begin until I have learnt as much as
                                possible about you and/or your business. Taking the time
                                on this stage helps create the game plan going forward to
                                solve the problems and construct the ideas you have brought forward
                                and gives us both clarity and confidence we are heading towards success.
                            </p>
                        </li>
                        <li className="process">
                            <p>Templating & Prototyping</p>
                            <p className="processDescription">This is the iterative stage, designing the look
                                and feel that will be present across the site to
                                align perfectly with your business image and ethos, Allowing you to extend your online
                                presence further and interact better with your audience.
                            </p>
                        </li>
                        <li className="process">
                            <p>Development Process</p>
                            <p className="processDescription">At this stage your vision will begin to come to life. The
                                work from the earlier stages will come to fruition as I build
                                the site to the highest level of quality, performance and security.
                                Implemented alongside this is any additional scope we may have
                                discussed such as a CMS should you wish to edit your own content and improve
                                your workflow & efficiency.
                            </p>
                        </li>
                        <li className="process">
                            <p>Continous Deployment</p>
                            <p className="processDescription">Your new pride and joy is likely to need some aftercare into the
                                future. I offer various servicing packages to maintain your site, ensure ongoing
                                performance without compromise and build on our relation for the long term.
                            </p>
                        </li>
                    </ol>
                </div>
            </section>
            <RecentBanner />
        </div>
    )
}

export default Home;
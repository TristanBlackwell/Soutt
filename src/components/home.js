import { Link } from "react-router-dom";
import plans from "../images/plans.jpg";

const Home = (props) => {

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
                <div id="heroBrief" data-aos="fade-left">
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
            <section id="homeWorkSection" className="container" data-aos="fade-down">
                <h2>Recent work</h2>
                <div className="strike"></div>
                <div id="homeWorkExamples" className="row">
                    {props.examples.map((example, index) => {
                        return (
                            <div className="col s12 m6 l4" key={example.name}>
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
            </section>
            <div id="homeAbout" className="container" data-aos="fade-left">
                <div id="homeAboutContent">
                    <img id="plansImg" src={plans} alt="wireframe" />
                    <div id="contentText" className="row">
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
                                solve the problems or construct the ideas you have brought forward
                                and gives us both clarity and confidence we are heading towards achievement.
                            </p>
                        </li>
                        <li className="process">
                            <p>Templating & Wireframing</p>
                            <p className="processDescription">This is the iterative stage of designing the look
                                and feel that will be present across the site and should
                                align perfectly with your business image and ethos. On top
                                of this is building a UX that is intuitive for all users.
                            </p>
                        </li>
                        <li className="process">
                            <p>Development Process</p>
                            <p className="processDescription">At this stage your vision will begin to come to life. The
                                work from the earlier stages will come to fruition as I build
                                the site to the highest level of quality, performance and security.
                                Implemented alongside this is any additional scope we may have
                                discussed such as a CMS should you wish to edit your own content.
                            </p>
                        </li>
                        <li className="process">
                            <p>Continous Deployment</p>
                            <p className="processDescription">Your new pride and joy is likely to need some aftercare into the
                                future. I offer various servicing packages to maintain your site
                                and build on our relation for the long term.
                            </p>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default Home;
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
                        <li className="process">Research & Development</li>
                        <li className="process">Templating & Wireframing</li>
                        <li className="process">Development Process</li>
                        <li className="process">Continous Deployment</li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default Home;
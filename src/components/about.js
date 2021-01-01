import RecentBanner from "./recentBanner";

export default function About() {

    return (
        <div id="aboutPage">
            <div className="NavCover" data-aos="fade-left">
                <div className="container">
                    <h1 id="aboutHeading">Be yourself, everyone else is already taken<strong>.</strong></h1>
                    <p></p>
                </div>
            </div>
            <div className="container center" id="aboutContent">
                <h3>Saying the most with the least</h3>
                <p>My name is Tristan, I am a computer science student and web designer/
                    developer helping to give back by providing clients in the Oxford
                    area with fantastic websites. As a mostly quiet individual I
                    believe my designs follow suit, saying a lot with a little. Keeping
                    true to my minimalist style.
                    <br/>
                    <br/>
                    As Abraham Lincoln once said "Give me 6 hours to chop down a tree
                    and I will spend the first 4 sharpening the axe". I believe the best
                    work can be done with thorough planning and with strong collaboration
                    and communication on both ends. I pride myself in helping my clients
                    the best I can and hope to build long term relations that allow for
                    the strongest synergy.
                    <br/>
                    <br/>
                    When I'm not in front of a screen designing and constructing epic
                    sites or studying <em>hard</em> for exams I usually try to balance
                    out my life with other hobbies such as visiting the gym or riding
                    the motorcycle.
                </p>
            </div>
            <div className="row" id="aboutBlocks">
                <div className="col m12 l6 aboutBlock" id="aboutBlock1">
                    <div className="container">
                        <h2>Why work with Me?</h2>
                        <p>Designing and developing good websites has been one of
                            my greatest enjoyments. The challenge of creating something
                            spectacular, learning something new and empowering others
                            is what gives me the drive to do what I do.
                            <br />
                            <br />
                            The never-ending journey to perfection is the path I follow,
                            and although I know that the destination can not be reached
                            just following the route is fine by me.
                        </p>
                    </div>
                </div>
                <div className="col m12 l6 aboutBlock" id="aboutBlock2">
                    <div className="container">
                        <h2>My passion</h2>
                        <p>Technology and everything remotely related has been my
                            passion since an early age. I have always found a
                            great satisfication in learning how different
                            technologies work and how it has come to shape the modern
                            world.
                            <br />
                            <br />
                            Freelancing has been my little piece of the pie and
                            is one I hope to continue to grow well into the future.
                        </p>
                    </div>
                </div>
            </div>
            <RecentBanner />
        </div>
    )
}
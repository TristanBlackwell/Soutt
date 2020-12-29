import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

import Project from "./project";

const Work = props => {

    let match = useRouteMatch();

    return (
        <div id="workPage">
            <div className="NavCover" >
                <div className="container">
                    <h1>Work</h1>
                    <p>View some of my recent projects.</p>
                </div>
            </div>
                    <Switch>
                        <Route path={match.path + "/:projectId"}>
                            <Project examples={props.examples}/>
                        </Route>
                        <Route path={match.path}>
                        <section id="workPortfolio">
                            <div className="container">
                                <div className="row">
                                    {props.examples.map((work, index) => {
                                        return (
                                            <div className="col s12 m6 l4" key={work.name} data-aos="fade-up">
                                                <Link to={match.url + "/" + index}>
                                                    <div className="workItem">
                                                        <img className="workThumbnail" src={work.thumbnail.url} alt="logo" />
                                                        <h5 className="workName">{work.name}</h5>
                                                        <p className="workTag">{work.tagline}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                        </Route>
                    </Switch>
        </div>
    )
}

export default Work;
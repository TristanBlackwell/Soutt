import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

import Project from "./project";

const Work = props => {

    let match = useRouteMatch();

    return (
        <div id="workPage">
            <div className="NavCover">
                <div className="container">
                    <h1>See my Work</h1>
                    <p>Below you can see some of my latest projects and get an idea of the work I do.</p>
                </div>
            </div>
                    <Switch>
                        <Route path={match.path + "/:projectId"}>
                            <Project examples={props.examples}/>
                        </Route>
                        <Route path={match.path}>
                        <section id="workPortfolio">
                            <div className="container">
                                {props.examples.map((work, index) => {
                                    return (
                                        <Link to={match.url + "/" + index} key={work.name}>
                                            <div className="workItem center">
                                                <img className="workThumbnail" src={work.thumbnail.url} alt="logo" />
                                                <h5 className="workName">{work.name}</h5>
                                                <p className="workTag">{work.tagline}</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </section>
                        </Route>
                    </Switch>
        </div>
    )
}

export default Work;
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
                                <div className="row">
                                    {props.examples.map((work, index) => {
                                        return (
                                            <div className="col s12 m6 l4" key={work.name}>
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
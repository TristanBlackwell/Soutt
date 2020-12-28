import { useParams } from "react-router-dom";

const Project = props => {

    let params = useParams();
    let id = params.projectId;

    return (
        <div className="projectPage">
            <div className="container">
                <h1 className="projectName">{props.examples[id].name}</h1>
                <div className="row">
                    <div className="col s12 l8 projectDescription">
                        <h5 className="projectSubheading">The project</h5>
                        <p className="projectDescription">
                            {props.examples[id].description}
                        </p>
                    </div>
                    <div className="col s12 l4 projectServices">
                        <h5 className="projectSubheading">Services</h5>
                        <ul className="projectList">
                            {props.examples[id].services.map(service => {
                                return (
                                    <li key={service}>
                                        {service}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <a href={props.examples[id].link}>
                    <div className="projectLink">
                        Visit site
                    </div> 
                </a>
            </div>
            <div className="projectGallery">
                <div className="container">
                    {props.examples[id].capsCollection.items.map(cap => {
                        return (
                            <img key={cap.url} src={cap.url} alt="project screencaps" className="projectCap" />
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Project;
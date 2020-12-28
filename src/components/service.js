import { useParams } from "react-router-dom";

const Service = props => {

    let params = useParams();
    let id = params.serviceId;

    return (
        <div className="servicePage">
            <div className="NavCover">
                <div className="container">
                    <h1 id="servicesHeading">{props.services[id].name}</h1>
                    <p>{props.services[id].tagline}</p>
                </div>
            </div>
            <div className="service">
                <div className="container">
                    <div className="row">
                        <div className="col s12 l4">
                            <h4 className="serviceSubHeading">{props.services[id].subHeading}</h4>
                            <div className="strike"></div>
                        </div>
                        <div className="col s12 l5 offset-l1">
                            <p className="serviceDescription">{props.services[id].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;
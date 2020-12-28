import { useState, useEffect } from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

import Service from "./service";

const query = `
{
  serviceCollection {
    items {
      id
      name
      subHeading
      tagline
      shortDescription
      description
      thumbnail {
        url
      }
    }
  }
}
`

export default function Services() {

    let match = useRouteMatch();

    const [services, setServices] = useState(null);

    useEffect(() => {
        window
        .fetch("https://graphql.contentful.com/content/v1/spaces/" + process.env.REACT_APP_SPACEID + "/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
            },
            body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
            if (errors) {
            console.error(errors);
            }

            let sorted = data.serviceCollection.items.sort(function(a, b) {
                return a.id - b.id
            })

            setServices(sorted);
        });
    }, []);

    if (!services) {
        return <div>Loading...</div>
    }

    return (
        <div id="servicesPage">
            <Switch>
                <Route path={match.path + "/:serviceId"}>
                    <Service services={services} />
                </Route>
                <Route path={match.path}>
                    <div className="NavCover">
                        <div className="container">
                            <h1 id="servicesHeading">Good Design is good business.</h1>
                            <p>I can provide a range of services depending on needs</p>
                        </div>
                    </div>
                    <div className="container">
                        <h2 id="servicesTitle">Services</h2>
                            <div className="strike"></div>
                            <div className="row">
                            {services.sort().map(service => {
                                return (
                                    <div className="serviceItem col s12 m6 l4" key={service.name}>
                                        <img src={service.thumbnail.url} alt="thumbnail"/>
                                        <h5 className="serviceItemName">{service.name}</h5>
                                        <p className="serviceItemDescription">{service.shortDescription}</p>
                                        <Link to={match.url + "/" + service.id}>
                                            <div className="serviceItemButton">Explore</div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}
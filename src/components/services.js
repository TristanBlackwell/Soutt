import { useState, useEffect } from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

import Navbar from "./navbar";
import Service from "./service";
import RecentBanner from "./recentBanner";

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

        if (window.loc !== window.location.pathname) {
            window.gtag("config", process.env.REACT_APP_TRACKING_ID, {
                page_title: window.location.pathname.slice(1, window.location.pathname.length)
            })
        }
    }, []);

    return (
        <div id="servicesPage">
            <Navbar />
            <Switch>
                <Route path={match.path + "/:serviceId"}>
                    <Service services={services} />
                    <RecentBanner />
                </Route>
                <Route path={match.path}>
                    <div className="NavCover" data-aos="fade-left">
                        <div className="container">
                            <h1 id="servicesHeading">Good Design Is Good Business</h1>
                            <p>Discover the various services I offer</p>
                        </div>
                    </div>
                    <div className="container">
                        <h2 id="servicesTitle">Services</h2>
                            <div className="strike"></div>
                            <div className="row center">
                                {services ? 
                                    services.sort().map(service => {
                                        return (
                                            <div className="serviceItem col s12 m12 l4" key={service.name}>
                                                <img className="" src={service.thumbnail.url} alt="thumbnail"/>
                                                <h5 className="serviceItemName">{service.name}</h5>
                                                <p className="serviceItemDescription">{service.shortDescription}</p>
                                                <Link to={match.url + "/" + service.id}>
                                                    <div className="serviceItemButton">Explore</div>
                                                </Link>
                                            </div>
                                        )
                                    }) :
                                    <div className="loadingWithin">
                                        <div className="loader">
                                            <div className="loader__bar"></div>
                                            <div className="loader__bar"></div>
                                            <div className="loader__bar"></div>
                                            <div className="loader__bar"></div>
                                            <div className="loader__bar"></div>
                                            <div className="loader__ball"></div>
                                        </div>
                                    </div>
                                }
                        </div>
                    </div>
                    <RecentBanner />
                </Route>
            </Switch>
        </div>
    )
}
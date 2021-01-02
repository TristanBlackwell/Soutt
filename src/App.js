import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/home";
import Work from "./components/work";
import Services from "./components/services";
import About from "./components/about";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Privacy from "./components/privacy";


AOS.init();

const query = `
{
  workProjectCollection {
    items {
      id
      name
      tagline
      services
      link
      description
      capsCollection {
        items {
          url
        }
      }
      thumbnail {
        url
      }
    }
  }
}
`
const history = createBrowserHistory();
ReactGA.initialize("G-NKJNP76D46");

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  console.log(location.pathname);
  //ReactGA.pageview(location.pathname);
})

function App() {

  const [work, setWork] = useState(null);


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

        let sorted = data.workProjectCollection.items.sort(function(a, b) {
          return a.id - b.id
        })

        setWork(sorted);
      });
  }, []);

  if (!work) {
    return (
      <div className="loading">
        <div className="loader">
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__ball"></div>
        </div>
      </div>
    )
  }

  return (
    <Router history={history}>
      <ScrollToTop>
      <Switch>
        <Route exact path="/">
          <Home examples={work}/>
        </Route>
        <Route path="/work">
          <Work examples={work}/>
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
      </Switch>

    <Footer />
    </ScrollToTop>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
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

      const script = document.createElement("script");
      script.async = true;
      script.text = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}; window.gtag = gtag; window.loc = window.location.pathname; gtag('js', new Date()); gtag('config', 'G-NKJNP76D46', { \"page_title\": \"initial\" });"
      document.body.appendChild(script);
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
    <Router >
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

import { useState, useEffect } from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

import Post from "./post";

const query = `
{
  blogPostCollection {
    items {
      id
      title
      shortDescription
      text
    }
  }
}
`

export default function RecentBanner() {

    let match = useRouteMatch();

    const [recents, setRecents] = useState(null);
    const [retrieved, setRetrieved] = useState(false);

    useEffect(() => {

      let isMounted = true;
      if (!retrieved) {
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

            let sorted = data.blogPostCollection.items.sort(function(a, b) {
                return b.id - a.id;
            })

            if (isMounted) setRecents(sorted);
            setRetrieved(true);
        });
      }

      return () => { isMounted = false};
    }, [recents, retrieved])

    if (!recents) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <Switch>
        <Route path={"/blog/:blogId"}>
          <Post blogPosts={recents} />
        </Route>
        <Route path={match.path}>
        <div className="recentBanner">
            <div className="container">
              <h3>Recent Posts</h3>
              <div className="strike"></div>
              <div className="row">
                {recents.slice(0, 3).map(post => {
                    return (
                      <div className="col s12 m6 l4 recentPost" key={post.title}>
                        <Link to={"/blog/" + post.id}>
                          <h5 className="recentTitle">{post.title}</h5>
                          <p className="recentDescription">{post.shortDescription}</p>
                        </Link>
                      </div>
                    )
                })}
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    )
}
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

export default function Blog() {

    let match = useRouteMatch();

    const [blogPosts, setBlogPosts] = useState(null);

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

            let sorted = data.blogPostCollection.items.sort(function(a, b) {
                return b.id - a.id
            })

            setBlogPosts(sorted);
        });
    })

    if (!blogPosts) {
        return <div>Loading...</div>
    }

    return (
        <Switch>
            <Route path={match.path + "/:blogId"}>
                <Post blogPosts={blogPosts} />
            </Route>
            <Route path={match.path}>
            <div id="blogPage">
                <div className="NavCover">
                    <div className="container">
                        <h1>In the mind of a dev</h1>
                        <p>Read my thoughts on various topics or get some advice</p>
                    </div>
                </div>
                <div id="blogPosts">
                    <div className="container">
                        <div className="row">
                            {blogPosts.map(post => {
                                return (
                                    <div className="blogItem col s12 m6 l4" key={post.title}>
                                        <Link to={match.url + "/" + post.id}>
                                            <h4 className="blogItemName">{post.title}</h4>
                                            <p className="blogItemDescription">{post.shortDescription}</p>
                                        </Link>
                                    </div> 
                                )
                            })}
                        </div>
                    </div>
                </div>
        </div>
            </Route>
        </Switch>
    )
}
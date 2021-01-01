import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    const [recents, setRecents] = useState(null);

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

            let sorted = data.blogPostCollection.items.slice(0, 3).sort(function(a, b) {
                return b.id - a.id;
            })

            setRecents(sorted);
        });
    })

    if (!recents) {
      return (
        <div>Loading...</div>
      )
    }

    return (
          <div className="recentBanner">
            <div className="container">
              <h3>Recent Posts</h3>
              <div className="strike"></div>
              <div className="row">
                {recents.map(post => {
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
    )
}
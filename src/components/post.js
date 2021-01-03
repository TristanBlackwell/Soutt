import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "./navbar";

const ReactMarkdown = require('react-markdown')


const Post = props => {

    const [sortedPosts, setSortedPosts] = useState(null);

    let params = useParams();
    let id = params.blogId;

    useEffect(() => {
        if (props.blogPosts) {
            let sorted = props.blogPosts.sort(function(a, b) {
                return a.id - b.id;
            })

            setSortedPosts(sorted);
        }
    }, [props.blogPosts])

    if (sortedPosts) { return (
        <div className="blogPost">
            <Navbar />
            <div className="NavCover">
                <div className="container center">
                    <h1>{sortedPosts[id].title}</h1>
                </div>
            </div>
            <div className="blogContent">
                <div className="container center">
                    <ReactMarkdown source={sortedPosts[id].text} />
                </div>
            </div>
            <div className="returnButtonContainer center">
                <Link to="/blog">
                    <div className="returnButton">&#8592; Back to posts</div>
                 </Link>
            </div>
        </div>
    )} else { return (
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
}

export default Post;
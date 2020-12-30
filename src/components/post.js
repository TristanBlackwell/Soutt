import { useParams } from "react-router-dom";
const ReactMarkdown = require('react-markdown')

const Post = props => {

    let params = useParams();
    let id = params.blogId;

    return (
        <div className="blogPost">
            <div className="NavCover">
                <div className="container center">
                    <h1>{props.blogPosts[id].title}</h1>
                </div>
            </div>
            <div className="blogContent">
                <div className="container center">
                    <ReactMarkdown source={props.blogPosts[id].text} />
                </div>
            </div>
            <div className="returnButtonContainer center">
                <div className="returnButton">&#8592; Back to posts</div>
            </div>
        </div>
    )
}

export default Post;
import React from "react";

const Post = (props) => {
    return (
        <div className="post">
        <div className="img-thumb">
            <img src="https://picsum.photos/seed/picsum/200/100" alt="dummy" />
        </div>
        <div className="content">
            <p className="title">Dummy title</p>
            <p className="desc">Dummy Body here</p>
        </div>
    </div>
    )
}

export default Post;
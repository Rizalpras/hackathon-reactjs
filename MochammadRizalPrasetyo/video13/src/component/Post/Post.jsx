import React from "react";

const Post = (props) => {
    return (
        <div className="post">
        <div className="img-thumb">
            <img src="https://picsum.photos/seed/picsum/200/100" alt="dummy" />
        </div>
        <div className="content">
            <p className="title">{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
            <button className="remove" onClick={props.remove}>Remove</button>
        </div>
    </div>
    )
}

export default Post;
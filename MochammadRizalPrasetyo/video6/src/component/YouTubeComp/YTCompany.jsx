import React from "react";
import './YouTubeComp.css'

const YTCompany = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/CZKcmzNs5Jw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDFCbLCe4k6tcIMOrareN1hklWhJA" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YTCompany.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YTCompany;
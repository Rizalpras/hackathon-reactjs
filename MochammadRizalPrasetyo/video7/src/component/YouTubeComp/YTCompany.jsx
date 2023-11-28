import React from "react";
import './YouTubeComp.css'
import { ReactPropTypes } from "react";

const YTCompany = (Props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/CZKcmzNs5Jw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDFCbLCe4k6tcIMOrareN1hklWhJA" alt="" />
                <p className="time">(Props.time)</p>
            </div>
            <p className="title">(Props.title)</p>
            <p className="desc">(Props.desc)</p>
        </div>
    )
}

export default YTCompany;
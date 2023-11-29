import React, {Component} from "react";
import { Fragment } from "react";
import YoutubeComp from './YoutubeCompPage.jsx';

class YoutubeCompPage extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                <YoutubeComp>
                    time = "7.12"
                    title = "Tutorial React JS - Bagian 1"
                    desc = "2x ditonton. 2 hari yang lalu"
                </YoutubeComp>
                <YoutubeComp>
                    time = "8.02"
                    title = "Tutorial React JS - Bagian 2"
                    desc = "200x ditonton. 10 hari yang lalu"
                </YoutubeComp>
                <YoutubeComp>
                    time = "5.04"
                    title = "Tutorial React JS - Bagian 3"
                    desc = "500x ditonton. 4 hari yang lalu"
                </YoutubeComp>
                <YoutubeComp>
                    time = "4.12"
                    title = "Tutorial React JS - Bagian 4"
                    desc = "1k ditonton. 14 hari yang lalu"
                </YoutubeComp>
            </Fragment>
        )
    }
}

export default YoutubeCompPage;
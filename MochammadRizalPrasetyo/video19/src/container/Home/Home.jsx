import React, { Component, Fragment } from "react";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp.jsx";
import BlogPost from "../pages/BlogPost/BlogPost";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Product from "../pages/Product/Product";
import CardProduct from "../CardProduct/CardProduct";
import './Home.css';
import YoutubeCompPage from "../pages/YoutubeComp/YoutubeCompPage.jsx";


class Home extends Component {
    state = {
        showComponent: true
    }
    render(){
        return (
            <BrowserRouter>
            <Fragment>
                <div className="navigation">
                   <Link to="/" >Blog Post</Link>
                   <Link to="/product" >Product</Link>
                   <Link to="/lifecycle" >LifeCycle</Link>
                   <Link to="/youtube-component" >Youtube</Link>
                </div>
            <Routes>
            <Route path="/" exact Component={BlogPost}/>
            <Route path="lifecycle" Component={LifeCycleComp}/>
            <Route path="product" Component={Product}/>
            <Route path="youtube-component" Component={YoutubeCompPage}/>
            </Routes>
            </Fragment>
            </BrowserRouter>
        )
    }
  
}
         


export default Home;



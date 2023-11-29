import React, { Component, Fragment } from "react";
import LifeCycleCop from "../LifeCycleComp/LifeCycleCop";
import BlogPost from "../BlogPost/BlogPost";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Product from "../Product/Product";
import CardProduct from "../CardProduct/CardProduct";
import './Home.css';


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
                   <Link to="/lifecycle" >Blog Post</Link>
                </div>
            <Routes>
            <Route path="/" exact Component={BlogPost}/>
            <Route path="lifecycle" Component={LifeCycleCop}/>
            <Route path="product" Component={Product}/>
            </Routes>
            </Fragment>
            </BrowserRouter>
        )
    }
  
}
         


export default Home;



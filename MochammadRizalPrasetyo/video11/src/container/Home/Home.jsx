import React, { Component } from "react";
import LifeCycleCop from "../LifeCycleComp/LifeCycleCop";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount(){
      
        
    }
    render(){
        return (
            <div> 
{/*              
            <p>LifeCycle Component</p>
            <hr />
            {
                this.state.showComponent ?
                <LifeCycleCop/>: null
            } */}
            <p>Blog Post</p>
            <hr />
            <BlogPost/>
            </div>
          )
    }
  
}


export default Home;



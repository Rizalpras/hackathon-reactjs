import React, { Component } from "react";
import LifeCycleCop from "../LifeCycleComp/LifeCycleCop";

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount(){
      
        
    }
    render(){
        return (
            <div> 
             
            <p>LifeCycle Component</p>
            <hr />
            {
                this.state.showComponent ?
                <LifeCycleCop/>: null
            }
            </div>
          )
    }
  
}


export default Home;



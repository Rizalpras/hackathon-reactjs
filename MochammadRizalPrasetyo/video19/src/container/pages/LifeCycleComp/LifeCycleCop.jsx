import React, {Component} from "react";
import './LifeCycleComp.css';
import { Fragment } from "react";

class LifeCycleCop extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps')
    return null;
    }

    componentDidMount () {
    console.log('componentDidMount')
    // setTimeout(() => {

    // }, 3000)
    // this.setState({
    //     count: 2
    // })
    }

    shouldComponentUpdate(nextprops, nextstate){
    console.group('shouldComponentUpdate')
    // console.log('nextprops: ', nextprops);
    console.log('this state: ', this.state)
    console.log('nextstate: ', nextstate);
    console.groupEnd();
    if (nextstate.count >= 4) {
        return false;
    }
    return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
    console.log(' getSnapshotBeforeUpdate')
    return null;
    }

    componentDidUpdate(prevprops, prevstate, snapshot){
    console.log('componentDidUpdate')
    }

    componentWillUnmount(){
    console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log('render')
        return(
            <Fragment>
                
                <p>Halaman LifeCycle</p>
                <hr />
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCycleCop;
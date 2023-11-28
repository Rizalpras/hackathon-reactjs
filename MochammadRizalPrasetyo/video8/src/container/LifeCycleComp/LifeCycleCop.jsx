import React, {Component} from "react";
import './LifeCycleComp.css';
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
    setTimeout(() => {
        this.setState({
            count: 2
        })
    }, 5000)
    }

    shouldComponentUpdate(nextprops, nextstate){
    console.log('shouldComponentUpdate')
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

    render() {
        console.log('render')
        return(
            <button className="btn">Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleCop;
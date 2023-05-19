import { Component } from "react";

export default class LifeCycleCEx extends Component{
    constructor(props){
        super(props)
        console.log("Object of LifeCycleEx created")
    }

    componentDidMount(){
        console.log("The LifeCycle compound is mounted")
    }

    componentDidUpdate(){
        console.log("The LifeCycle component is updated")
    }

    render(){
        return <h1>The Lifecycle Component</h1>
    }
}
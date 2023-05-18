import { Component } from "react";

export default class Fruits extends Component{

    constructor(){
        super()
        this.state={arr:["mango","plum"]}
    }

    handler=(e)=>{
        let fruitname=e.target.value
        
        // this.state.arr.push(fruitname)
        // this.setState({arr:this.state.arr})     //the old and new address are same, so RERENDERER is not ordered
        
        let temp=[...this.state.arr]
        temp.push(fruitname)
        this.setState({arr:temp})                  //the temp has different address, hence RERENDERER is ordered
    }

    getLi=()=>{
        // let arrayoflistitems=[]
        // for(var i=0; i<this.state.arr.length; i++){
        //     let jsxelement=<li>{this.state.arr[i]}</li>
        //     arrayoflistitems.push(jsxelement)
        // }
        // return arrayoflistitems
        
        return this.state.arr.map((fruitname,index)=>{return <li key={index}>{fruitname}</li>})
    }

    render(){
        return <div style={{margin:"10px"}} className="outline">
            Add Fruit:<input type="text" onBlur={this.handler}></input>
            <br></br>
            <ol>
                {this.getLi()}
            </ol>
            <p>Arr={this.state.arr}</p>
        </div>
    }
}
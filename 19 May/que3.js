import axios from "axios";
import { Component } from "react";

export default class ShowId extends Component{


    constructor(){
        super()
        this.state={optionarr:[]}
        this.state=({choice:""})
    }

    componentDidMount(){
        
        axios.get("./shopstock.json").then((resp)=>{
            let arr=resp.data
            let temp = arr.map(
                (e,index)=>{
                    return <option key={index} value={e.id}>{e.item_name}</option>
                })
            this.setState({optionarr:temp})
        })
    }
    

    render(){
        return <div>
            <select onChange={(e)=>{this.setState({choice:e.id})}}>
            {this.state.optionarr}
            </select>
        </div>
    }
}
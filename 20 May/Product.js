import axios from "axios"
import { Component } from "react"
import { Link } from "react-router-dom"

export default class Product extends Component{

    constructor(){
        super()
        this.state={optionarr:[]}
    }
    
    componentDidMount(){
        axios.get("./shopstock.json").then((resp)=>{
            let arr=resp.data
            let temp=arr.map((e,index)=>{
                return <option key={index} value={e.id}>{e.id}</option>
            })
            this.setState({optionarr:temp})
            console.log(temp);
    })
    }

    display(e){
        let _id=e.target.value
        console.log(_id);
    }
    
    render(){
        return <div>
            {this.state.optionarr}
        Select product id:
        <select onChange={this.display}>
            <option>select</option>
            {this.state.optionarr}
        </select>
        <p><Link to="/update">Update</Link></p>
        <p><Link to="/delete">Delete</Link></p>
    </div>
    }
    
    
}
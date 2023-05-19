import axios from "axios"
import { Component } from "react"

export default class PutAjaxEx extends Component{

    constructor(){
        super()
        this.name=""
        this.job=""
        this.state={resp:null}
    }

    handler=()=>{
        let requestobj={name:this.name, job:this.job}
        let promise=axios.put("https://reqres.in/api/users/2",requestobj)

        promise.then((resp)=>{
            this.setState({resp:resp.data})
        })
    }

    render(){
        return <div>
            {/* <input type="text" value="text" class="form-control"></input>  */}
            <p>Name:<input type="text" onBlur={(e)=>{this.name=e.target.value}}></input></p>
            <p>Job:<input type="text" onBlur={(e)=>{this.job=e.target.value}}></input></p>
            <p><button onClick={this.handler}>firequery</button></p>
            <p>Response:{this.state.resp!=null?this.state.resp.updatedAt:"Data not arrived"}</p>
        </div>
    }
}
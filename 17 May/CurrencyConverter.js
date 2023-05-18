import { Component } from "react";

export default class CurrencyConverter extends Component{

    constructor(){

        super()
        this.state={x:0}
        this.state={c1:""}
        this.state={c2:""}    

    }

    handler=(e)=>{
        let  _x=e.target.value
        this.setState({x:_x})    
    }

    handler1=(e)=>{
        let _c1=e.target.value
        this.setState({c1:_c1})
    }

    handler2=(e)=>{
        let _c2=e.target.value
        this.setState({c2:_c2})
    }

    compute=()=>{
        if(this.state.c1==="dollar"&& this.state.c2==="dollar"){
            let h=this.state.x
            this.setState({x:h})
        }

        if(this.state.c1==="dollar"&& this.state.c2==="euro"){
            let a= this.state.x*0.91
            this.setState({x:a})
        }

        if(this.state.c1==="dollar"&& this.state.c2==="rupee"){
            let b = this.state.x*81.73
            this.setState({x:b})
        }

        if(this.state.c1==="euro"&& this.state.c2==="dollar"){
            let c = this.state.x*1.1
            this.setState({x:c})
        }

        if(this.state.c1==="euro"&& this.state.c2==="euro"){
            let i=this.state.x
            this.setState({x:i})
        }

        if(this.state.c1==="euro"&& this.state.c2==="rupee"){
            let d = this.state.x*90.04
            this.setState({x:d})
        }

        if(this.state.c1==="rupee"&& this.state.c2==="dollar"){
            let f = this.state.x*0.012
            this.setState({x:f})
        }

        if(this.state.c1==="rupee"&& this.state.c2==="euro"){
            let g = this.state.x*0.011
            this.setState({x:g})
        }

        if(this.state.c1==="rupee"&& this.state.c2==="rupee"){
            let j=this.state.x
            this.setState({x:j})
        }
    }

    clean=()=>{
        this.setState({x:""})
    }
    
    
    render(){
        return <div>
            <input type="number" id="i1" onBlur={this.handler}/>
        FROM: 
        <select id="s1" onChange={this.handler1}>
            <option>select</option>
            <option value="dollar">dollar</option>
            <option value="euro">euro</option>
            <option value="rupee">rupee</option>
        </select>

        TO: 
        <select id="s2" onChange={this.handler2}>
            <option>select</option>
            <option value="dollar">dollar</option>
            <option value="euro">euro</option>
            <option value="rupee">rupee</option>
        </select>

        <input type="button" value="convert" onClick={this.compute}/>
        
        <p>Conversion={this.state.x}</p>
        
        <input type="button" value="clear" onClick={this.clean}/>
        </div>
    }
}
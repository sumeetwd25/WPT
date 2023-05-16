import { Component } from "react";

export default class Factorial extends Component
{
    constructor(props)
    {
        super(props)
        this.a=props.num1
    }

    calcFact()
    {
        let fact=1
        for(var i=1; i<=this.a; i++)
        {
            fact=fact*i
        }
        return fact
    }

    render(){
        return <div>
            <p>Factorial of {this.a} is {this.calcFact()}</p>
        </div>
    }
}
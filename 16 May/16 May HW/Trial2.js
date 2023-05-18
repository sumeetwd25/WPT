import AppHW1 from "./AppHW1";
import { Component } from "react";
import React from "react";

export default class Trial2 extends Component{

    render(){
        return <div>
        <AppHW1 flag={true}  num1={10} str="HW1" arr={[1,2,3]}></AppHW1>
    </div>
    }

}
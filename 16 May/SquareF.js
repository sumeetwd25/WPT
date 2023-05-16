import {useState} from "react";

export default function SquareF(){

        let v=0                                 //v is a simple local variable

        let [sqr, setSqr]=useState(0)           //Here, sqr is a state variable

        function textreceiver(e){
            v=e.target.value
            v=v*v
            setSqr(v)
            console.log(v)
        }
    

    return <div>
        <input type="number" onBlur={textreceiver}></input>
        <p>Square={sqr}</p>
    </div>
}
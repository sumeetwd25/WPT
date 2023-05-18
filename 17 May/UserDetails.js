import { useState } from "react";
import Graduate from "./Graduate";

export default function UserDetails(){
    
    let styleobj={backgroundColor:"lightgrey", textAlign:"center", borderStyle:"solid", borderWidth:"px"}

    //let [hideflag,setflag]=useState(false)
    let[res,setres]=useState("")

    function f2(){
        setres(<Graduate></Graduate>)
    }

    function f1(e){
        
        switch(e.target.value){
            case "G":console.log("graduate");
                    f2()
            break

            case "PG":console.log("post graduate"); 
            break

            case "UG":console.log("under graduate"); 
            break

            default:break
        }
    }

    return <div style={styleobj}>
        <p>Username:<input type="text"/></p>
        <p>Email:<input type="email"/></p>
        <p>Qualification:<select onChange={f1}>
            <option>Select</option>
            <option value="G">Graduate</option>
            <option value="PG">Post Graduate</option>
            <option value="UG">Under Graduate</option>
            </select></p>

            <p>{res}</p>

    </div>
}
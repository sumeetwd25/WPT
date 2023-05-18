import { useState } from "react";
import Graduate from "./GraduateComponent";
import PGComponent from "./PGComponent";
import UnderGradComponent from "./UnderGradComponent";

export default function UserDetails(){
    
    let styleobj={backgroundColor:"lightgrey", textAlign:"center", borderStyle:"solid", borderWidth:"px"}

    let[choice,setchoice]=useState("")

    return <div style={styleobj}>
        <p>Username:<input type="text"/></p>
        <p>Email:<input type="email"/></p>
        <p>Qualification:<select onChange={(e)=>{setchoice(e.target.value)}}>
            <option>Select</option>
            <option value="G">Graduate</option>
            <option value="PG">Post Graduate</option>
            <option value="UG">Under Graduate</option>
            </select></p>

            {/* <p>{choice}</p> */}

            {choice==="G"?<Graduate></Graduate>:""}
            {choice==="PG"?<PGComponent></PGComponent>:""}
            {choice==="UG"?<UnderGradComponent></UnderGradComponent>:""}

    </div>
}
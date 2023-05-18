import { useState } from "react";
import ParentComponent from "./ParentComponent";
import SquareC from "./SquareC";
import Header from "./header";
import Fruits from "./Fruits";
import CurrencyConverter from "./CurrencyConverter";
import UserDetails from "./UserDetails";

export default function App17(){

    let [hideflag, setflag]=useState(false)

    return <div>

        {hideflag?"":<Header></Header>}
        Hide Header:<input type="checkbox" onChange={(e)=>setflag(e.target.checked)}></input>
        
        <SquareC></SquareC>
        
        <ParentComponent></ParentComponent>

        <Fruits></Fruits>

        <CurrencyConverter></CurrencyConverter>

        <UserDetails></UserDetails>
    </div>
}

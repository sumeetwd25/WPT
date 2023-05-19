import { useState } from "react";
import MainComponent from "./MainComponent";
import PutAjaxEx from "./PutAjaxEx";
import AjaxWithReactF from "./ajaxwithreact";
// import LifeCycleCEx from "./LifeCycleClassComponent";
import PopulateData from "./PopulateDate";
import LifeCycleF from "./LifeCycleFunctionComponent";


export default function App19(){

    let [choice, setchoice]=useState(false)
    let [msg,setmsg]=useState("hi")

    return <div>
        <AjaxWithReactF></AjaxWithReactF>
        <MainComponent></MainComponent>
        <PutAjaxEx></PutAjaxEx>

       <input type="checkbox" onChange={(e)=>{
        setchoice(e.target.checked)
       }}></input>

       <input type="text" onBlur={(e)=>{
        setmsg(e.target.value)
       }}></input>

       {/* {choice && <LifeCycleCEx message={msg}></LifeCycleCEx>} */}

       <PopulateData></PopulateData>

       {choice && <LifeCycleF num1={msg}></LifeCycleF>}
    </div>
}
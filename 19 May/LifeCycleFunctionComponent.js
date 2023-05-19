import { useEffect } from "react";

export default function LifeCycleF({num1}){
    //called just after mounting
    useEffect(()=>{
        console.log("The component LifeCycleF is mounted");
        return ()=>{console.log("component unmounted callback within callback")}
    },[])

    //just after the prop of state variable changes
    useEffect(()=>{
        console.log("the prop has changed")
    },[num1])

    return <h1>This is a Lifecycle Function</h1>
}
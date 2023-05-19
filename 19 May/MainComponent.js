import axios from "axios"
import { useState } from "react"
import ShowEmployee from "./ShowEmployee"

export default function MainComponent(){

    let id=0
    let [arr,setarr]=useState([])

    function handler(){
        let p=axios.get(`https://reqres.in/api/users/${id}`)
        p.then((resp)=>{
            let obj=resp.data.data
            arr.push(obj)
            setarr([...arr])
            console.log(arr)
        })

    }

    function display(){
        return arr.map((employee)=>{
            return <ShowEmployee 
            id={employee.id} 
            first_name={employee.first_name} 
            last_name={employee.last_name} 
            email={employee.email} 
            avatar={employee.avatar}></ShowEmployee>
        })
        
    }

    return <>
        <input type="number" onBlur={(e)=>{id=e.target.value}}></input>
        <input type="button" value="getEmp" onClick={handler}></input>
        <p>{display()}</p>
        <p id="p2"></p>
        
    </>
}

// 1. Try out the examples of get JSON array and get individual employee and PUT
// request using reqres.in as discussed

import axios from "axios"

import { useState } from "react"

export default function Putemployye()
{
    let Name=""
    let job=""
    let [employee,setemployee]=useState({emp:null})

   
  function handler()
    {
        let data={Name:Name,Job:job}
        console.log(data)
        console.log(typeof(data));
        console.log(typeof(emp))
       axios.put('https://reqres.in/api/users/2',data).then((res)=>{
       console.log(res.data);     
       setemployee({emp:res})
       })
    }




    return<div>
   <p>Name:<input type="text" onBlur={(e)=>{Name=e.target.value}}></input></p>
   <p>job:<input type="text" onBlur={(e)=>{job=e.target.value}}></input></p>
    <button onClick={handler}></button>
   
   <p>{employee.emp==null?"employee not updated":JSON.stringify(employee.emp.data)}</p>
    </div>
}
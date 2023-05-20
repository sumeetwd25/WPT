import axios from "axios";
import { useState } from "react";

export default function AjaxWithReactF(){

    let [arr,setarr]=useState([])

    function handler(){
        let promise = axios.get("https://reqres.in/api/users?page=2")
        promise.then((res)=>{
            console.log(res);
            setarr(res.data.data)
        })
    }

    function rows(){
        return arr.map((employee,index)=>{
            return (
                <tr key={index}>
                <td>{index+1}</td>
                <td>{employee.first_name.concat(" ",employee.last_name)}</td>
                <td>{employee.email}</td>
                <td><img alt="" src={employee.avatar} width="50" height="50"></img></td>
                </tr>
                )
              
        })
        
    }

    return <div>
        <input type="button" value="getdata" onClick={handler}></input>

        <table border="1">
            <thead>
                <tr>
                    <td>Index</td><td>Name</td><td>Email</td><td>Photo</td></tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>
        </table>
    </div>
}
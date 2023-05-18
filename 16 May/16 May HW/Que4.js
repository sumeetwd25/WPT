import { useState } from "react"

export default function Login(){

    let [r,result]=useState("")

    let arr=[
        { uname: "xxx" ,password :"123"},
        { uname: "rrr" ,password :"13"},
        { uname: "xeex" ,password :"23"},
    ]

    let textvalue1=""
    function textHandler1(event1){
        textvalue1=event1.target.value
        //console.log("uname: ",textvalue1)
    }

    let textvalue2=""
    function textHandler2(event2){
        textvalue2=event2.target.value
        //console.log("pwd: ",textvalue2)
    }

    function f1(){
        for(let i=0; i<arr.length;i++)
        {
            if(textvalue1===arr[i].uname && textvalue2===arr[i].password){
                console.log("SUCCESSFUL LOGIN")
                result("SUCCESSFUL LOGIN")
                return
            }  
        }
        
        console.log("FAILED")
        result("FAILED")

     
    }

        return <div>

            <p><input type="text" placeholder='username' id="i1" onChange={textHandler1}/></p>
            <p><input type="password" placeholder='password' id="i2" onChange={textHandler2}/></p>
            <p><input type="submit" id="b1" value="Login" onClick={f1}/></p>

            <p>{r}</p>
            </div>   
    
}


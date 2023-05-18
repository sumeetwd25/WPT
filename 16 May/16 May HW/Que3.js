import {useState} from 'react'

export default function Que3(){

    let [textvalue,settext]=useState("")
    let [res,setres]=useState()

    //let textvalue=""

    function textHandler(event){
        //textvalue=event.target.value
        settext(event.target.value)
        console.log("you entered ",textvalue)
    }

/* 
    function handler1(event){                            //method 1
        if(event.target.checked)
        setres(textvalue.toUpperCase())
        else
        setres(textvalue)
    }

    function handler2(event){
        if(event.target.checked)
        setres(textvalue.toLowerCase())
        else
        setres(textvalue)
    }

    function handler3(event){
        if(event.target.checked)
        setres(textvalue.substring(0,1).toUpperCase().concat(textvalue.substring(1).toLowerCase()))
        else
        setres(textvalue)
    }
*/
/* 
    function casehandler(e){                                //method 2
        let val = e.target.value
        switch(val){
            case "uppercase":
                setres(textvalue.toUpperCase())
                break
            
            case "lowercase":
                setres(textvalue.toLowerCase())
                break

            case "titlecase":
                setres(textvalue.substring(0,1).toUpperCase().concat(textvalue.substring(1).toLowerCase()))
                break

            default:
                break
        }
    }
*/
    function casehandler2(val){                             //method 3
        switch(val){
            case "uppercase":
                setres(textvalue.toUpperCase())
                break
            
            case "lowercase":
                setres(textvalue.toLowerCase())
                break

            case "titlecase":
                setres(textvalue.substring(0,1).toUpperCase().concat(textvalue.substring(1).toLowerCase()))
                break

            default:
                break
        }
    }

    return <div>
            <input type="text" onBlur={textHandler}/>
            <p>Upper-case:<input type="radio" name='choicecase' value="uppercase" onChange={(e)=>{casehandler2(e.target.value)}}/></p>
            <p>Lower-case:<input type="radio" name='choicecase' value="lowercase" onChange={(e)=>{casehandler2(e.target.value)}}/></p>
            <p>Title-case:<input type="radio" name='choicecase' value="titlecase" onChange={(e)=>{casehandler2(e.target.value)}}/></p>

            <p>{res}</p>

    </div>

}
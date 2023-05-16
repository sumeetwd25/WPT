import "./ex1.css"
export default function FromViewToComp()
{
    let textvalue=""
    function textHandler(event){
        textvalue=event.target.value
        console.log("you entered", textvalue)
    }

    function btnhandler(){
        console.log(textvalue.toUpperCase())
    }

    function handler1(e){
        console.log(e.target.name)
        let targetname=e.target.name
        if(targetname==="colors")
            console.log("red green blue")
        if(targetname==="weekdays")
            console.log("mon tue wed")
    }

    return <div className="bordered">
        <input type="text" onChange={textHandler}></input>
        <button onClick={btnhandler}>show on console</button>
        <button onClick={handler1} name="colors">colors</button>
        <br></br>
        <button onClick={handler1} name="weekdays">weekdays</button>
    </div>
}
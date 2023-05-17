export default function Que3(){

    let textvalue=""

    function textHandler(event){
        textvalue=event.target.value
        console.log("you entered ",textvalue)
    }


    function handler1(){
        console.log(textvalue.toUpperCase())
    }

    function handler2(){
        console.log(textvalue.toLowerCase())
    }
    function handler3(){
        console.log(textvalue.substring(0,1).toUpperCase().concat(textvalue.substring(1).toLowerCase()))
    }

    return <div>
            <input type="text" onBlur={textHandler}/>
            <p>Upper-case:<input type="checkbox" value="uppercase" onChange={handler1}/></p>
            <p>Lower-case:<input type="checkbox" value="lowercase" onChange={handler2}/></p>
            <p>Title-case:<input type="checkbox" value="titlecase" onChange={handler3}/></p>

    </div>

}
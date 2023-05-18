export default function AppHW1(props){
    let n=props.num1
    console.log(typeof(n));
    
    if(props.func1!==undefined)
        props.func1()

    return <div>
        <p>{props.num1} {typeof(props.num1)}</p>        
        <p>{props.str} {typeof(props.str)}</p>
        <p>{props.arr} {typeof(props.arr)}</p>
        
        <p>{props.flag?"hi":"bye"}</p>
    </div>
}
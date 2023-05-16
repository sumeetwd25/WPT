import Add from "./Add"
import Factorial from "./Factorial"
import FromViewToCompClass from "./FromViewToCompClass"
import FromViewToComp from "./FromViewToComponent"
import SquareF from "./SquareF"
import TrialProps from "./TrialProps"

export default function App16(){

    let obj={xcoordinate:12, ycoordinate:20}

    function alpha(){
        console.log("Alpha called")
    }

    return <div>
        <Add num1={12} num2={13}></Add>
        <Add num1={100} num2={13}></Add>
        <Add num1={121} num2={13}></Add>
        <Add num1={1} num2={3}></Add>

        <Factorial num1={5}></Factorial>

        <TrialProps func1={alpha} flag={true} point={obj} num1={45} str={"PPP"} arr={[10,20,30]}></TrialProps>

        <FromViewToComp></FromViewToComp>

        <FromViewToCompClass></FromViewToCompClass>

        <SquareF></SquareF>

    </div>
}
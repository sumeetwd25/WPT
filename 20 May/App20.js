import { Routes,Route } from "react-router-dom";
import Greeting from '../Greeting'
import Fruits from '../17 May/Fruits'
import UseParamsEx from "./UseParamsEx";

export default function App20(){

    return <Routes>
        <Route path="/" element={<Greeting></Greeting>}></Route>
        <Route path="/fruits" element={<Fruits></Fruits>}></Route>
        <Route path="/welcome/:name" element={<UseParamsEx></UseParamsEx>}></Route>
    </Routes>
}
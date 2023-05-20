import { Routes,Route } from "react-router-dom";
import Greeting from '../Greeting'
import Fruits from '../17 May/Fruits'
import UseParamsEx from "./UseParamsEx";
import Home from "./Home";
import Login from "../Login"
import CurrencyConverter from "../17 May/CurrencyConverter";
import SquareC from "../17 May/SquareC"

export default function App20(){

    return <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/greeting" element={<Greeting></Greeting>}></Route>
        <Route path="/fruits" element={<Fruits></Fruits>}></Route>
        <Route path="/welcome/:name" element={<UseParamsEx></UseParamsEx>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/currencyconverter" element={<CurrencyConverter></CurrencyConverter>}></Route>
        <Route path="/square" element={<SquareC></SquareC>}></Route>
    </Routes>
}
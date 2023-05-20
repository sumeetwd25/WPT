import { Routes,Route } from "react-router-dom";
import Product from "./Product";
import Update from "./Update";
import Delete from "./Delete";


export default function App20HW(){
    return <Routes>
        <Route path="/" element={<Product></Product>}></Route>
        <Route path="/update" element={<Update></Update>}></Route>
        <Route path="/delete" element={<Delete></Delete>}></Route>

    </Routes>
}
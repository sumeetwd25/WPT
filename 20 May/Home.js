import { Link, Outlet } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h4>Home Page</h4>
            <p><Link to="/greeting">Greeting</Link></p>
            <p><Link to="/fruits">Fruits</Link></p>
            <p><Link to="/login">Login</Link></p>
            <p><Link to="/currencyconverter">Currency Converter</Link></p>
            <p><Link to="/square">Square</Link></p>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )    
}
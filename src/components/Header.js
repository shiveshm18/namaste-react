import LOGO_URL from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"

const Header = ()=>{
    const [Btn, setBtn] = useState("Login");
    
    return (
        <div className="head">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            
            <div className="nav-list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <li><button 
                    onClick={()=>{
                        (Btn === "Login") 
                        ?setBtn("Logout")
                        :setBtn("Login")
                    }}>{Btn}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
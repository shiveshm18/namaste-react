import LOGO_URL from "../utils/constants";
import { useState } from "react";

const Header = ()=>{
    const [Btn, setBtn] = useState("Login")
    
    return (
        <div className="head">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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
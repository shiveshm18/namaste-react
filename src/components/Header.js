import LOGO_URL from "../utils/constants";

const Header = ()=>{
    return (
        <div className="head">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="search">
                <input placeholder="Search for Restraunt"/>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
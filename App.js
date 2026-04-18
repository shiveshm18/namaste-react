import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="head">
            <div className="logo">
                <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg" alt="logo" />
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

const ResCard = (props)=>{
    const { ResData } = props;
    return(
        <div className="cards">
            <img className="card-img" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/2/15702/de171d14091d634bb630e34bcd7ea5ea_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
            <h3>{ResData.name}</h3>  
            <h4>{ResData.cuisine}</h4>
            <h4>{ResData.rating}</h4> 
            <h4>{ResData.deliveryTime}</h4>    
        </div>
)};

const ResObj = {
    R1: {
        name: "KFC" ,
        cuisine: "Fried Chicken",
        rating: "4.4 stars",
        deliveryTime: "30-35 mins"
    },
    R2: {
        name: "Star Bucks" ,
        cuisine: "Coffee",
        rating: "4.2 stars",
        deliveryTime: "30-35 mins"
    },
    R3: {
        name: "Non-Veg Dhaba" ,
        cuisine: "Chicken, Mutton, Fish",
        rating: "4 stars",
        deliveryTime: "35-40 mins"
    }
}

const Body = ()=>{
    return(
    <div className="body">
        <div className="res-container">
            <ResCard  ResData = {ResObj.R1} />
            <ResCard  ResData = {ResObj.R2} />
        </div>
    </div>
)};

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
        
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body = ()=>{
    const [resList , setresList] = useState([]);
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = ()=>{
        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6554933&lng=74.8550184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        .then(res => res.json())
        .then(data => setresList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants))
    }

    if(resList.length===0){
        return <Shimmer />;
    }

    return(
    <div className="body">
        <div className="filters">
            <button className="top-rated-btn"
                onClick={()=> {
                    const filtered = resList.filter((res)=> res.info.avgRating > 4.3);
                    setresList(filtered);
                }}>
                Top Rated Restraunts 
            </button>
        </div>
        <div className="res-container">
            { resList.map((restraunts)=> <ResCard key={restraunts.info.id} ResData = {restraunts} />) }
        </div>
    </div>
)};

export default Body;
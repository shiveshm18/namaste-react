import ResList from "../utils/mockData";
import ResCard from "./ResCard";
import { useState } from "react";

const Body = ()=>{
const [resList , setresList] = useState(ResList)

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
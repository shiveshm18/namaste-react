import ResList from "../utils/mockData";
import ResCard from "./ResCard";

const Body = ()=>{
    return(
    <div className="body">
        <div className="res-container">
            { ResList.map((restraunts)=> <ResCard key={restraunts.info.id} ResData = {restraunts} />) }
            
        </div>
    </div>
)};

export default Body;
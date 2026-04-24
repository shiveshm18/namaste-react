import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body = ()=>{
    const [resList , setresList] = useState([]);
    const [copyList, setCopyList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = ()=>{
        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6580091&lng=74.86166469999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        .then(res => res.json())    
        .then(data => {
                    setresList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                    setCopyList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                })  //optional chaining
    };

    return (resList.length === 0) ? <Shimmer /> :   (               //conditional rendering using ternanry operator
    <div className="body"> 
        <div className="search">
                <input type="text" placeholder="Search for Restraunt" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    const filtered = resList.filter(res=> res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase().trim()))
                    setCopyList(filtered);
                }}>🔍</button>
        </div>
        <div className="filters">
            <button className="top-rated-btn"
                onClick={()=> {
                    if(toggle === false){
                        const filtered = resList.filter((res)=> res.info.avgRating > 4.3);
                        setCopyList(filtered);
                    }
                    else setCopyList(resList);
                    setToggle(!toggle)
                }}>
                Top Rated Restraunts 
            </button>
        </div>
        <div className="res-container">
            { copyList.map((restraunts)=> <ResCard key={restraunts.info.id} ResData = {restraunts} />) }
        </div>
    </div>
)};
   
export default Body;
import {CARD_IMG_URL} from "../utils/constants"

const ResCard = ({ ResData })=>{
    const {name, cuisines, avgRating, areaName, totalRatingsString, cloudinaryImageId} = ResData?.info ;
    return(
        <>
        <div className="cards">
            <img className="card-img" alt="res-logo" 
            src={CARD_IMG_URL+cloudinaryImageId} />
            <h3>{name}</h3>  
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating} Stars ({totalRatingsString})</h4>       
        </div>
        </>
)};

export default ResCard;
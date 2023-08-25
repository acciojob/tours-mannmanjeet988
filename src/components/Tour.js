import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  console.log(tour, removeTour, "Ayush");

   const[showMore, setShowMore] = useState(false)

  return (
    <div>
        
        <h3>{tour.name}</h3>
        <p>${tour.price}</p>
        {/* { !showMore ?
            <p>tour.info.substring(0,50) <button onClick={()=>setShowMore(true)}>Show Less</button> </p> : ""
        } */}
        <p>{tour.info}</p>
        <button className="delete-btn"  onClick={()=>removeTour(tour.id)}>Not interested</button>
   
    </div>
  );
};

export default Tour;

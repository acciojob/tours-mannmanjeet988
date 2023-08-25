import React, { useState, useEffect } from "react";
import tourData from "../tourData/tourData";
import styles from "../styles/App.css";
import Tour from "./Tour";

const App = () => {
  console.log(tourData);
  const [tours, setTours] = useState(tourData);
  console.log(tours);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div id="main">
        <h1>Loading...</h1>
      </div>
    );
  }

  const refreshTours = () => {
    setIsLoading(false);
    setTours(tourData); // it will set predefined data
  };

  if(tours.length===0){
    return(
      <div id="main">
       <h1>No More Tours</h1>
       <button className="btn" onClick={refreshTours}>Refresh</button>
      </div>
    )
  }

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  return (
    <main id="main">
      <h1>Tour List</h1>
      {tours.map((tour) => 
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      )}
    </main>
  );
};
export default App;

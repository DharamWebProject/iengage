import React from 'react';
import ImageSlider from './ImageSlider';
const Home = () => {
 
  const myName = "Dharam K";
  const myMessage = "Hello Welocome";
  return (
    <>
    <ImageSlider />
      <div className="container-fluid">
        <div className="container">
        <h1>Home Page new</h1>
        <h1>My Name is {myName}!</h1>
        <p>{myMessage}</p>
      </div>
    </div>
    
    </>
  );

};

export default Home;  // Make sure to export the component

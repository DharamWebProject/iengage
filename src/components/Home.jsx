import React from 'react';

const Home = () => {
 
  const myName = "Dharam";
  const myMessage = "Hello Welocome";
  return (
    <>
      <div className="container-fluid">
        <div className="container">
        <h1>Home Page</h1>
        <h1>My Name is {myName}!</h1>
        <p>{myMessage}</p>
      </div>
    </div>
    
    </>
  );

};

export default Home;  // Make sure to export the component
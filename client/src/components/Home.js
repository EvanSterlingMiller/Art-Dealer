import React from 'react';

import DisplayCard from '../pages/DisplayCard'

function Home() {
    return (
    
        <div className="home-body">

            HOME PAGE 
          {/*   temporary placement of displaycard component until routes work */}
      <DisplayCard />
      {/* possible card flip from first project for easier transitions, only issues i had was fitting in all information into the size of the card, but easy fix (SUGGESTION!!) */}
        </div>
    );
  }
  
  export default Home;
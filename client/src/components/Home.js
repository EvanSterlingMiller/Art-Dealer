import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import DisplayCard from '../components/pages/DisplayCard'

function Home() {
    return (
 <div className="home-body">
      <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <img style={{ width: '80%', margin: '10px auto', display: 'block'}} src={slideImage.url} alt='' />
          </div>
        ))}
      </Slide>
    </div>

            HOME PAGE 
          {/*   temporary placement of displaycard component until routes work */}
      <DisplayCard />
        </div>
    );
}

export default Home;

import React, {useState, useEffect} from 'react';
import data from '../images.json'

const Slides = () => {


    return (
      <div className='slides-container'>
         {data.map(image => (
          <div key={image.id}>
            <p>{image.name}</p>
            <img src={image.path} alt={image.name} />
          </div>
        ))}
      </div>
      );
  


  }



  
  export default Slides;
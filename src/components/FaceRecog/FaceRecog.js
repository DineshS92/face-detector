import React from 'react';
import './FaceRecog.css';

const FaceRecog = ({ imgUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='target' src={imgUrl} alt='Input' width='500px' height='auto'/>
        <div 
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}className='bounding_box'>
        </div>
      </div>
    </div>
  );
}

export default FaceRecog;

//https://source.unsplash.com/500x900/?people-dancing

// center ma
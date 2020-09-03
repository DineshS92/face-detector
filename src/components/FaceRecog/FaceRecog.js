import React from 'react';
import './FaceRecog.css';

const FaceRecog = ({ imgUrl, box }) => {
  const bbComps = box.map((bBox, i) => {
    return (
      <div
        key={i}
        style={{top: bBox.topRow, right: bBox.rightCol, bottom: bBox.bottomRow, left: bBox.leftCol}}className='bounding_box'>
      </div>
    );
  })

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='target' src={imgUrl} alt='Input' width='500px' height='auto'/>
        {/* <div 
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}className='bounding_box'>
        </div> */}
        {bbComps}
      </div>
    </div>
  );
}

export default FaceRecog;

//https://source.unsplash.com/500x900/?people-dancing

// center ma
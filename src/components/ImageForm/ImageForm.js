import React from 'react';

const ImageForm = ({ onInputChange, onButSubmit }) => {
  return (
    <div className='ma5 br3 shadow-2 pa2'>
      <p className='f3 tc fw6'>
        {'Detect Faces in Your Pictures. Enter URL of the Image to Get Started'}
      </p>
      <div className='flex flex-wrap mb4'>
        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
        <button className='w-30 f4 link pv2 dib white bg-black pointer' onClick={onButSubmit}>Detect</button>
      </div>
    </div>
  );
}

export default ImageForm;
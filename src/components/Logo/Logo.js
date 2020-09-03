import React from 'react';
import Tilt from 'react-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div className='ma3 mt0'>
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 50, width: 270 }} >
        <div className="Tilt-inner">
          <h1><FontAwesomeIcon icon={faSmileWink} size='lg'/> Face Detector</h1>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
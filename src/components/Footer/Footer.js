import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='mw-100 bg-navy'>
      <p className='pv2 f5 white'>Created with &#x2764; by Dinesh Sadhwani using <FontAwesomeIcon icon={faReact} className='f5'/> and <FontAwesomeIcon icon={faNodeJs} className='f5'/></p>
    </div>
  );
}

export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='w-100 bg-navy'>
      <p className='pv1 tracked f5 white'>Created with &#x2764; by Dinesh Sadhwani using <FontAwesomeIcon icon={faReact} className='f5'/> and <FontAwesomeIcon icon={faNodeJs} className='f5'/></p>
    </div>
  );
}

export default Footer;
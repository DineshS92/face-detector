import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Logo />
          <p
            onClick={() => onRouteChange('signout')} 
            className='f4 link dim black underline pa3 pointer'>
            Sign Out
          </p>
        </nav>
      );
    }
    else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Logo />
        </nav>
      );
    }
}

export default Navigation;
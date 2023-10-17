import React from 'react';

function Banner({ status, children, action, actionText }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button 
      style={{color : 'Blue', fontSize: '2rem'}}
      onClick={action}
      >
        {actionText}
      </button>
    </div>
  );
}

export default Banner;

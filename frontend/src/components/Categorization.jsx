import React from 'react';
import { useUser } from './UserContext';

const Categorization = () => {
  const { user } = useUser();  

  return (
    <div className="categorizationcontainer">
    <div className='user'>
      <h1>Categorization Page</h1>
      {user ? (
        <p>Hello, {user.displayName || 'User'}!</p>  
      ) : (
        <p>Loading user information...</p>
      )}
    </div>

    </div>
  );
};

export default Categorization;

import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

//! This will be turned into my dashboard
//todo need to build the rest of my pages and the functions to push there

function UserPage() {

  // this component doesn't do much to start, just renders some user reducer info to the DOM

  const user = useSelector((store) => store.user);

  //! What displays
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <button> Upload Images </button>

      <button> Edit Existing Kit</button>

      <LogOutButton className="btn" />


    </div>

 
  );
} //! End of function



export default UserPage;

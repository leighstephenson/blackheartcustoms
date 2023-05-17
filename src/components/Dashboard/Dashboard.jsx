import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


//! This will be turned into my dashboard
//todo need to build the rest of my pages and the functions to push there

function Dashboard() {

   //! Our hooks
   let history = useHistory();

  const user = useSelector((store) => store.user);

 //! Leads to upload images
 const toUpload = () => { history.push('/uploadImages') }


 //! Leads to edit existing kit
 const toEditExistingKit = () => { history.push('/editExisting') }

  //! What displays
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <button className="btn" onClick={toUpload}> Upload Images </button>

      <br />

      <button className="btn" onClick={toEditExistingKit}> Edit Existing Kit</button>

      <br />

      <LogOutButton className="btn" />


    </div>


  );
} //! End of function



export default Dashboard;

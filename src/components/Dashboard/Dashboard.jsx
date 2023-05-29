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

  //! Leads to add new kit
  const toAddNewKit = () => { history.push('/addNewKit') }

  //! What displays
  return (
    <div className="container">
      <center>
        <h2>Welcome, {user.username}!</h2>

        <br />
        
        <button className="btn" onClick={toAddNewKit}> Add New Kit </button>

        <br /> <br />

        <button className="btn" onClick={toEditExistingKit}> Edit Existing Kit</button>

        <br /> <br />

        <LogOutButton className="btn" />

      </center>
    </div>


  );
} //! End of function



export default Dashboard;

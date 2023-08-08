import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Dashboard.css';
import { Typography } from '@mui/material';


function Dashboard() {
  //! Hooks
  let history = useHistory();

  const user = useSelector((store) => store.user);

  //! Leads to edit existing kit
  const toEditExistingKit = () => { history.push('/editExisting') }

  //! Leads to add new kit
  const toAddNewKit = () => { history.push('/addNewKit') }

  //! What displays
  return (
    <div className="container">
      <center>
        <Typography variant='h3'>  Dashboard </Typography>
        <br />
        <h3 className='animate-character-on-dash' >Welcome, {user.username}!</h3>

        <br /> <br />

        <button className="btn" onClick={toAddNewKit}> Add New Kit </button>

        <br /> <br />

        <button className="btn" onClick={toEditExistingKit}> Edit Existing Kit</button>

        <br /> <br />

        <LogOutButton className="btn" />

      </center>
    </div>
  );
} //! End of Dashboard()

export default Dashboard;
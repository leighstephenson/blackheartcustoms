import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './LandingPage.css';
import { Grid } from '@mui/material/';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');

  // const onLogin = (event) => {
  //   history.push('/login');
  // };

  //! Our hooks
  const dispatch = useDispatch();
  const history = useHistory();

  //! Stores our kits
  const kits = useSelector(store => store.kits);

  //! Sets selected kit and brings user to details
  const kitSelection = (kit) => {
    dispatch({ type: 'SET_SELECTED_KIT', payload: kit });
    history.push('/details')
  };

  //! Fetch the list of movies
  useEffect(() => {
    dispatch({ type: 'FETCH_KITS' });
  }, []);

  //! What displays
  return (
    <div className="container">
      <Typography variant="h2"
        sx={{
          textAlign: 'center'
        }}>
        {heading}
      </Typography>

<br/>

      <Typography variant="h6"
      sx={{
        textAlign: 'center'
      }}>
        Brief description of Black Heart Models and the use of this app
      </Typography>

      <div className="grid">
        <div className="grid-col grid-col_8">


          {kits.map(kit => {
            return (
              <Card sx={{
                display: 'block',
                padding: 1,
                margin: 5,
                width: 400,
                justifyContent: 'center',
                textAlign: 'center',
              }}>
                <div onClick={() => kitSelection(kit)}>
                  <h3> {kit.name} </h3>
                  <img src={kit.url} alt={kit.name} />
                </div>
                <br />


                </Card>
            );
          })}


        </div>

        {/* //! Commenting this out to remove registration for now */}
        {/* <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div> */}

      </div>
    </div>
  );
}

export default LandingPage;

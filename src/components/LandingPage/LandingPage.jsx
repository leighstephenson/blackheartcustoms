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
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');

  const onLogin = (event) => {
    history.push('/login');
  };


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

  //TODO Edit all of this text
  //! What displays
  return (
    <div className="container">
      <Typography variant="h3"
        sx={{
          textAlign: 'center'
        }}>
        {heading}
      </Typography>

      <br />

      <Typography variant="p"
        sx={{
          textAlign: 'center'

        }}>
        Black Heart Models is a family-owned business that specializes in
        busts and wall-hangers of a variety of sci-fi, horror,
        and fantasty subjects.

        <br />
        <br />

        Most of our products come unpainted, so we offer a custom
        painting service for those who don't have the time, skill,
        or patience to paint their own.

        <br />
        <br />
        
        On this website you will find examples of custom work
        done by George and Leigh Stephenson.

      </Typography>

      <br />
      <br />
      <hr />
      <br />

      <Typography variant="h5"
        sx={{ textAlign: 'center', }}>
        Click a photo to view more details.
      </Typography>

      <br />
      <br />

      <div className="grid">
        <div>


          {kits.map(kit => {
            return (
              <Grid sx={{
                display: 'block',
                padding: 1,
                marginBottom: 3,
                width: "auto",
                maxHeight: "auto",
                textAlign: 'center',
                boxShadow: 4,
              }}>

                <Card onClick={() => kitSelection(kit)}>
                  <h3> {kit.name} </h3>
                  <img src={kit.url} alt={kit.name} />
                </Card>


              </Grid>
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

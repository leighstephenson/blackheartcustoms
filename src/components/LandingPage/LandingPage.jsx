import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './LandingPage.css';
import { Grid } from '@mui/material/';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';

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
    dispatch(
      { type: 'SET_SELECTED_KIT', payload: kit },
      // { type: 'SET_SELECTED_PHOTO', payload: photos }
    );
    history.push('/details')
  };

  //! Fetch the list of kits
  useEffect(() => {
    dispatch({ type: 'FETCH_KITS' });
  }, []);

  //! What displays
  return (
    <div className="container">
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        {heading}
      </Typography>

      <br />

      <center>
        <div className='webText'>
          <Typography variant="p" sx={{ textAlign: 'center' }}>

            Black Heart Models is a family-owned business that specializes in
            busts and wall-hangers of a variety of sci-fi, horror,
            historical, and fantasy subjects.

            <br /> <br />

            Most of our products come unpainted, so we offer a custom
            painting service for those who don't have the time, skill,
            or patience to paint their own.

            <br /> <br />

            On this website you will find examples of custom work
            done for Black Heart clients.

          </Typography>
        </div>
      </center>

      <br /> <br /> <hr /> <br />

      <Typography variant="h5" sx={{ textAlign: 'center', }}>
        Click a photo to view more details.
      </Typography>

      <br /> <br />

      <div className="grid">
        <div>
          {kits.map(kit => {
            return (
              <Grid key={kit.id}
                sx={{
                  display: 'block',
                  width: 470,
                }}>

                <div className="container">
                  <Card
                    sx={{
                      boxShadow: 5,
                      padding: 1,
                      marginBottom: 2,
                      textAlign: 'center',

                    }}
                    onClick={() => kitSelection(kit)}
                  >
                    <h3> {kit.name} </h3>
                    <img src={kit.photo} alt={kit.name} />
                  </Card>
                </div>

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
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material/';

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

  //! Stores our movies
  const kits = useSelector(store => store.kits);

  //! Fetch the list of movies
  useEffect(() => {
      dispatch({ type: 'FETCH_KITS' });
  }, []);

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Brief desciption of Black Heart Models and the use of this app
          </p>

          {kits.map(kit => {
                    return (
                            <Grid key={kit.id} sx={{
                                
                                display: 'inline',
                                width: 300,
                                justifyContent: 'center',
                            }}>
                                <h3> {kit.name} </h3>
<img src={kit.url} />
                               
                               
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

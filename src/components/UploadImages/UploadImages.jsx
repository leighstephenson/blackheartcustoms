import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';


function UploadImages() {

  //! Hooks
  const [heading, setHeading] = useState('Upload Images');
  const dispatch = useDispatch();
  const history = useHistory();

  
   //! Back to dashboard
   const goBack = () => { history.push('/dashboard') }



  //TODO need submit button to POST the upload to the server 
  //! What displays
  return (

    <div>
      <h2>{heading}</h2>
      <Button variant="outlined" onClick={goBack}>
        Back
      </Button>

      <Button variant="outlined">
        Upload images
      </Button>

      <Button variant="outlined">
        Submit
      </Button>


    </div>

  );
}// End UploadImages()

export default UploadImages;

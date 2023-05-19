import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';


function UploadImages() {

  //! Hooks
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Upload Images');

  //TODO need submit button to POST the upload to the server 

  //! What displays
  return (

    <div>
      <h2>{heading}</h2>
      <Button>
        Back
      </Button>

      <Button>
        Upload images
      </Button>

      <Button>
        Submit
      </Button>


    </div>

  );
}// End UploadImages()

export default UploadImages;

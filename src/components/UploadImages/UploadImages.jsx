import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function UploadImages() {

  //! Hooks
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Upload Images');

  //TODO Need to add a button to open file selector
  //TODO add a submit button to POST the upload to the server 
  //TODO add back to dashboard button later

  //! What displays
  return (

    <div>
      <h2>{heading}</h2>
    </div>

  );
}// End UploadImages()

export default UploadImages;

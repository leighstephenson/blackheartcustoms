import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function UploadImages() {

  //! Hooks
  const [heading, setHeading] = useState('Upload Images');
  const [selectedFile, setSelectedFile] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  
   //! Back to dashboard
   const goBack = () => { history.push('/dashboard') }

   const onFileChange = (event) => {
    const fileToUpload = event.target.files[0];
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (acceptedImageTypes.includes(fileToUpload.type)) {
        setSelectedFile(fileToUpload);
    } else {
        alert('Please select an image');
    }
};

//TODO move this to saga if time allows
const uploadImage = (event) => {
  const fileName = encodeURIComponent(selectedFile.name);
  const formData = new FormData();
  formData.append('image', selectedFile);
  axios.post(`api/photos?name=${fileName}`, formData);
};

  //TODO need submit button to POST the upload to the server 
  //! What displays
  return (

    <div>
      <h2>{heading}</h2>
      <Button variant="outlined" onClick={goBack}>
        Back
      </Button>

      <input
    type="file"
    accept="image/*"
    onChange={onFileChange}
/>

      <Button onClick={uploadImage} variant="outlined">
        Upload images
      </Button>

      <Button variant="outlined">
        Submit
      </Button>


    </div>

  );
}// End UploadImages()

export default UploadImages;

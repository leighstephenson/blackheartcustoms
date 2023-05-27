import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Input from '@mui/material';


function UploadImages() {

  //! Hooks
  const [heading, setHeading] = useState('Upload Images');
  const [selectedFile, setSelectedFile] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();


  //! Back to dashboard
  const goBack = () => { history.push('/dashboard') }
  // const editExisting = () => { history.push('/editExisting') }


  const onFileChange = (event) => {
    const fileToUpload = event.target.files[0];
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (acceptedImageTypes.includes(fileToUpload.type)) {
      setSelectedFile(fileToUpload);
    } else {
      alert('Please select an image');
    }
  };

  //TODO kitId should be replaced by actual kit id
  const uploadImage = (event) => {
    dispatch ({type: 'UPLOAD_PHOTO', payload: {selectedFile:selectedFile, kitId: id}})
  
  };

  //! What displays
  return (

    <div>
      <h2>{heading}</h2>
      <Button variant="outlined" onClick={goBack}>
        Back
      </Button>

      <br/>

      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />

      <br/>

      <Button onClick={uploadImage} variant="outlined">
        Upload images
      </Button>

    </div>

  );
}// End UploadImages()

export default UploadImages;

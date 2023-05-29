import React, { useState } from 'react';
import './UploadImages.css';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';
import { Input } from '@mui/material';


function UploadImages() {

  //! Hooks
  const [heading, setHeading] = useState('Upload Images');
  const [selectedFile, setSelectedFile] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();


  //! Back to dashboard
  const goBack = () => { history.push('/dashboard') }
  // const editExisting = () => { history.push('/editExisting') }


  const onFileChange = (event) => {
    const fileToUpload = event.target.files[0];
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];
    if (acceptedImageTypes.includes(fileToUpload.type)) {
      setSelectedFile(fileToUpload);
    } else {
      alert('Please select an image');
    }
  };

  //TODO kitId should be replaced by actual kit id- need to get this working
  //! the id is returning as undefined, causing the 500 error cuz DB wants an integer
  const uploadImage = (event) => {
    console.log(id);
    dispatch({ type: 'UPLOAD_PHOTO', payload: { selectedFile: selectedFile, kitId: id} })

  };

  //! What displays
  return (

    <center>
      <h2>{heading}</h2>

      <br />
      <br />

      <Input
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />

      <br />
      <br />

      <Button onClick={uploadImage} variant="outlined"
        sx={{
          margin: 2,
        }}>
        Upload images
      </Button>



      <Button variant="outlined" onClick={goBack}>
        Back
      </Button>
    </center>

  );
}// End UploadImages()

export default UploadImages;

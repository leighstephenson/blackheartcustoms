import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './UploadImages.css';
// import axios from 'axios';
import { Input } from '@mui/material';


function UploadImages() {

  //! Stores our kits
  let kits = useSelector(store => store.kits);

  //! States
  let [thisKit, setThisKit] = useState({})
  let [myKits, setMyKits] = useState("")

  //! Hooks
  const [heading, setHeading] = useState('Upload Images');
  const [selectedFile, setSelectedFile] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (kits.length === 0) {
      dispatch({ type: 'FETCH_KITS'})
    } else {
      setMyKits(kits)
      setThisKit(kits[kits.length - 1])
    }
  }, [kits]);


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
    dispatch({ type: 'UPLOAD_PHOTO', payload: { selectedFile: selectedFile, kitId: id} });
    history.push(`/dashboard`);


  };

  //! What displays
  return (
    <>
      {myKits.length === "" ? (
        <>
          <h2>Loading</h2>
        </>
			) : (
      <center>
        <h2 className="animate-character">{heading} for {thisKit.name}</h2>

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
    )}
  </>
  );
}// End UploadImages()

export default UploadImages;
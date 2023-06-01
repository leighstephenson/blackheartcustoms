import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './UploadImages.css';
// import ProgressBar from '../ProgressBar/ProgressBar';
import { Input } from '@mui/material';


function UploadImages() {

  //! Stores our kits
  let kits = useSelector(store => store.kits);


  //! States
  let [thisKit, setThisKit] = useState({})
  let [myKits, setMyKits] = useState("")

  //! Hooks
  const [heading, setHeading] = useState('Upload Image');
  const [selectedFile, setSelectedFile] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (kits.length === 0) {
      dispatch({ type: 'FETCH_KITS' })
    } else {
      setMyKits(kits)
      setThisKit(kits[kits.length - 1])
      console.log(thisKit)

    }
  }, [kits, thisKit]);


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

  const uploadImage = (event) => {
    console.log('uploaded id',id);
    console.log('this kit', thisKit);
    console.log('myKits', myKits);

    dispatch({ type: 'UPLOAD_PHOTO', payload: { selectedFile: selectedFile, kitId: id } });
    history.push(`/success`);


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
          <br /> <br />

          <Typography variant='h4'>{heading}</Typography>

          <br /> <br />

          <h3> Please choose an image for {thisKit.name}</h3>
         
          <br />

          <Input className='uploadInput'
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />

          <br />  <br /> <br />  <br />


          <button className="btn" onClick={uploadImage}>
            Upload
          </button>

          <br />
          <br />

          <button className="btn" onClick={goBack}>
            Back
          </button>
        </center>
      )}
    </>
  );
}// End UploadImages()

export default UploadImages;
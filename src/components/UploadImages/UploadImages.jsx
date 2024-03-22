import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './UploadImages.css';
import { Input } from '@mui/material';


function UploadImages() {

  //! Stores our kits
  const selectedKit = useSelector((store) => store.selectedKit);

  //! States
  let [selectedFile, setSelectedFile] = useState('');

  //! Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'FETCH_SELECTED_KIT', payload: id });
  }, []);

  //! Back to dashboard
  const goBack = () => { history.push('/dashboard') }
  // const editExisting = () => { history.push('/editExisting') }

  //! Image upload stuff
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
    console.log('uploaded id', id);
    dispatch({ type: 'UPLOAD_PHOTO', payload: { selectedFile: selectedFile, kitId: id } });
    history.push(`/success`);
  };

      //! Deletes a kit from the database
      const deleteKit = () => {
        if (window.confirm("Warning: This kit will be deleted")) {
            dispatch({ type: 'DELETE_KIT', payload: id });
            history.push('/editExisting')
        }
    };

  //! What displays
  return (
    <>
      {Object.keys(selectedKit).length === 0 ? (
        <>
          <h2>Loading</h2>
        </>
      ) : (
        <center>

          <h3> Please choose an image for {selectedKit.name}</h3>

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

          <br /> <br />

          <button className='delete-btn' onClick={deleteKit}>
                                Delete Kit
                            </button>

                            <br /> <br />

          <button className="btn" onClick={goBack}>
            Back
          </button>
        </center>
      )}
    </>
  );
}// End UploadImages()

export default UploadImages;
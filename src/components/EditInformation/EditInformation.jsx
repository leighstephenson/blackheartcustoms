//TODO imports here
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import UploadImages from '../UploadImages/UploadImages';




function EditInformation() {
    //! Hooks
    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams();
    const [selectedKitHook, setSelectedKitHook] = useState({});

    //! Fetch selected kit
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_KIT', payload: id });
        if (Object.keys(selectedKit).length === 0) {
            setSelectedKitHook(selectedKit)
        }
    }, []);


     //! Use effect to make the page load at the position I want
     useEffect(() => {
        window.scrollTo(0, 170)
      }, [])


    //! Stores our kits
    // const kits = useSelector(store => store.kits);
    const selectedKit = useSelector((store) => store.selectedKit);


    //! States
    const [name, setKitName] = useState(selectedKit.name);
    const [description, setKitDescription] = useState(selectedKit.description);
    const [backstory, setKitBackstory] = useState(selectedKit.backstory);
    const [photo, setKitPhoto] = useState(selectedKit.photo);
    const [order, setKitOrder] = useState(selectedKit.order);

    //! Back to dashboard
    const goBack = () => { history.goBack() }

    //! handleChange - need one for EACH value that can change.
    // values in kit: "name", "description", "backstory", "url"/"photo", "order"

    //! Name
    const handleNameChange = (event) => {
        setKitName(event.target.value);
        console.log(name);
    }

    //! Description
    const handleDescriptionChange = (event) => {
        setKitDescription(event.target.value);
    };

    //! Backstory
    const handleBackstoryChange = (event) => {
        setKitBackstory(event.target.value);
    };

    //! Photo/URL
    const handlePhotoChange = (event) => {
        setKitPhoto(event.target.value);
    };

    //! Order
    const handleOrderChange = (event) => {
        setKitOrder(event.target.value);
    };

    //! Submit
    const submitChanges = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_KIT', payload: { id, name, description, backstory, photo, order }
        })
        history.push('/editExisting');
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
            <br />
            <Typography variant="h4"
                sx={{ textAlign: 'center', }}>
                Edit Information
            </Typography>
            <br />
            {/* conditional rendering here? */}
            {!selectedKit.url ? (
                <>
                    <UploadImages />
                </>
            ) : (
                <>
                    <center>
                        <Card sx={{
                            width: 300,
                            padding: 2,
                            outline: 5,
                            outlineColor: 'black',
                            boxShadow: 4,
                        }}>
                            <img src={selectedKit.url} />
                        </Card>
                        <br />
                        <br />


                    


                        <form onSubmit={submitChanges} autoComplete="off">
                            <TextField
                                label="Name"
                                defaultValue={selectedKit.name}
                                onChange={handleNameChange}
                                required
                                sx={{
                                    width: 250,
                                }}
                            />
                            <br /> <br />
                            <TextField
                                label="Description"
                                defaultValue={selectedKit.description}
                                onChange={handleDescriptionChange}
                                rows="6" multiline required
                                sx={{
                                    width: 250,
                                }}
                            />
                            <br /> <br />


                            <TextField
                                label="Character Backstory"
                                defaultValue={selectedKit.backstory}
                                onChange={handleBackstoryChange}
                                rows="8" multiline 
                                sx={{
                                    width: 250,
                                }}


                            />
                            <br /> <br />


                            <TextField
                                label="URL"
                                defaultValue={selectedKit.url}
                                onChange={handlePhotoChange}
                                rows="12"
                                sx={{
                                    width: 250,
                                }}


                            />
                            <br /> <br />


                            <TextField
                                label="Order on Home Page"
                                placeholder="Order"
                                defaultValue={selectedKit.order}
                                required onChange={handleOrderChange} 
                                sx={{
                                    width: 250,
                                }}/>


                            <br /> <br /> <br />


                            <button className="btn" variant="outlined">
                                Save
                            </button>


                            <br /> <br />


                            <button className='delete-btn' onClick={deleteKit}>
                                Delete Kit


                            </button>


                            <br /> <br />


                            <button className="btn" onClick={goBack}>
                                Go Back
                            </button>


                        </form>

                    </center>
                </> 

            )
            }


        </>


    )


}; // End editInformation()


export default EditInformation;

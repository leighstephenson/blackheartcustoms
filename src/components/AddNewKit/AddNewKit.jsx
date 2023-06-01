//todo imports here
import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import ProgressBar from '../ProgressBar/ProgressBar';

//? having an issue on this component..
// I'm storing the "last"/most recent kit and the list of all kits, but when uploading an image
// I am receiving the 2nd most recent kit ID instead of the newest, so my new 
// upload is being added to the wrong kit. The lastKit is being set on page load, not on submit..

function AddNewKit() {

    //! Stores our kits
    let kits = useSelector(store => store.kits);

    //! States
    let [newKit, setNewKit] = useState({ kitName: '', description: '', backstory: '' })
    let [lastKit, setLastKit] = useState({})
    let [allKits, setAllKits] = useState([])

    //! Hooks
    const dispatch = useDispatch();
    const history = useHistory();

    //! Use effect, sets [allKits] and {lastKit}
    useEffect(() => {
        if (kits.length === 0) {
            dispatch({ type: 'FETCH_KITS' })
        } else {
            setAllKits(kits)
            console.log('allKits', allKits)
            setLastKit(kits[kits.length - 1])
            console.log('lastKit', lastKit);
        }
    }, [kits]);


    // Handle Changes
    //! Name
    const handleNameChange = (event) => {
        setNewKit({ ...newKit, kitName: event.target.value });
    }
    //! Description
    const handleDescriptionChange = (event) => {
        setNewKit({ ...newKit, description: event.target.value });
    }

    //! Backstory
    const handleBackstoryChange = (event) => {
        setNewKit({ ...newKit, backstory: event.target.value });
    }

    //! Back to dashboard
    const goBack = () => { history.push('/dashboard') };

    // Something may be out of order here?
    //! ADD/SUBMIT
    const addNewKit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_NEW_KIT', payload: newKit, setNewKit: setNewKit });
        setNewKit({ kitName: '', description: '', backstory: '' });
        console.log('lastKit on AddNew', lastKit)
        history.push(`/uploadImages/${lastKit.id}`)
    }

    //! What displays
    return (
        <>
            {kits.length === 0 ? (
                <>
                    <h2>Loading</h2>
                </>

            ) : (
                <>
                    <br />

                    <Typography variant="h4"
                        sx={{
                            textAlign: 'center',

                        }}>
                        Add New Kit
                    </Typography>
                    <br /> <br />

                    <center>

                        <Typography> Please add information: </Typography>
                        <br />
                        <form onSubmit={addNewKit} autoComplete="off">

                            {/*//! Name Input */}
                            <TextField
                                label="Name"
                                onChange={handleNameChange}
                                required
                            />
                            <br /> <br />

                            {/*//! Description Input */}
                            <TextField
                                label="Description"
                                onChange={handleDescriptionChange}
                                rows="12"
                                required
                            />
                            <br /> <br />

                            {/*//! Backstory Input */}
                            <TextField
                                label="Character Backstory"
                                onChange={handleBackstoryChange}
                                rows="12"

                            />

                            <br /> <br />

                            {/*//! Submit Button */}
                            <button className="btn" type="submit">
                                Submit
                            </button>

                        </form>
                    </center>

                    <br />

                    <center>
                        {/*//! Button to go back */}
                        <button className="btn" onClick={goBack}>
                            Go Back
                        </button>
                    </center>
                </>
            )}
        </>
    )
}; //End AddNewKit

export default AddNewKit; 
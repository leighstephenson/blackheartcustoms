//todo imports here
import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
            setLastKit(kits[kits.length - 1])
        }
    }, [kits]);

     //! Use effect to make the page load at the postion I want
     useEffect(() => {
        window.scrollTo(0, 180)
      }, [])


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

    //! ADD/SUBMIT
    const addNewKit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_NEW_KIT', payload: newKit, setNewKit: setNewKit });
        setNewKit({ kitName: '', description: '', backstory: '' });
        history.push(`/editExisting`)
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
                                sx={{
                                    width: 250,
                                }}
                            />
                            <br /> <br />

                            {/*//! Description Input */}
                            <TextField
                                label="Description"
                                onChange={handleDescriptionChange}
                                rows="5" multiline required
                                sx={{
                                    width: 250,
                                }}
                            />
                            <br /> <br />

                            {/*//! Backstory Input */}
                            <TextField
                                label="Character Backstory"
                                onChange={handleBackstoryChange}
                                rows="5" multiline
                                sx={{
                                    width: 250,
                                }}

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
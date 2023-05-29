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
    let [allKits, setAllKits] = useState([])
    let [lastKit, setLastKit] = useState({})

    //! Hooks
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (kits.length === 0) {
            dispatch({ type: 'FETCH_KITS' })
        } else {
            setAllKits(kits)
            setLastKit(kits[kits.length - 1])
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

    //! ADD/SUBMIT
    const addNewKit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_NEW_KIT', payload: newKit, setNewKit: setNewKit });
        setNewKit({ kitName: '', description: '', backstory: '' });
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
                        Add Info For New Kit
                    </Typography>
                    <br />
                    <br />

                    <center>
                        <form onSubmit={addNewKit} autoComplete="off">

                            {/*//! Name Input */}
                            <TextField
                                label="Name"
                                onChange={handleNameChange}
                                required
                            />
                            <br /><br />

                            {/*//! Description Input */}
                            <TextField
                                label="Description"
                                onChange={handleDescriptionChange}
                                rows="12"
                                required
                            />
                            <br /><br />

                            {/*//! Backstory Input */}
                            <TextField
                                label="Character Backstory"
                                onChange={handleBackstoryChange}
                                rows="12"

                            />

                            <br />
                            <br />

                            {/*//! Submit Button */}
                            <Button type="submit" variant="outlined"
                                sx={{
                                    color: 'black',
                                    borderColor: 'black',
                                    backgroundColor: 'lightGrey',
                                    ':hover': {
                                        bgcolor: 'salmon',
                                    },

                                }}>
                                Submit
                            </Button>

                        </form>
                    </center>
                    
                    <br/>

                    <center>
                    {/*//! Button to go back */}
                    <Button variant="outlined" onClick={goBack}
                        sx={{
                            color: 'black',
                            borderColor: 'black',
                            backgroundColor: 'lightGrey',
                            ':hover': {
                                bgcolor: 'salmon',
                            },

                        }}>
                        Go Back
                    </Button>
                    </center>
                </>
            )}
        </>
    )
}; //End AddNewKit

export default AddNewKit; 
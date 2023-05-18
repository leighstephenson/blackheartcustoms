//TODO imports here
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


function EditInformation() {

    //! Our hooks
    const dispatch = useDispatch();
    const history = useHistory();

    //! Stores our kits
    const kits = useSelector(store => store.kits);
    const selectedKit = useSelector((store) => store.selectedKit);

    //! Back to dashboard
    const goBack = () => { history.push('/dashboard') }
    //TODO should I have the back button go back to dash or back to selection?
    //TODO Add a form here that will take in current values for kits and 
    //TODO allow us to edit them. Edits will UPDATE the database

    //! handleChange - need one for EACH value that can change. 
    // kit: "name", "description", "backstory", "url", "order"

    const handleNameChange = (event) => {
        setKit({ ...newKit, name: event.target.value })
    };

    const handleDescriptionChange = (event) => {
        setKit({ ...newKit, description: event.target.value })
    };

    const handleBackstoryChange = (event) => {
        setKit({ ...newKit, backstory: event.target.value })
    };

    const handleUrlChange = (event) => {
        setKit({ ...newKit, url: event.target.value })
    };

    const handleOrderChange = (event) => {
        setKit({ ...newKit, order: event.target.value })
    };

    // Adds kit to the database and returns user to dashboard.
    // maybe add a success page for a stretch??

    const addKit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_KIT', payload: newKit, setKit: setKit });
        setKit({ //have to enter values for this 
        });
        history.push('/dashboard');
    }



    return (
        <>
            <h1> Edit Information </h1>

            {/*//! Button to go back */}
            <Button variant="outlined" onClick={goBack}
                sx={{
                    margin: 3,
                    color: 'black',
                    borderColor: 'black',
                    backgroundColor: 'lightGrey',
                    ':hover': {
                        bgcolor: 'salmon',
                    },

                }}>
                Go Back
            </Button>

            {/*//! Form to input new Kit information  
            name, description, backstory, url, order */}

            <form onSubmit={addKit} autoComplete="off">

                {/*//! Name Input */}
                <TextField
                    placeholder="Name of Kit"
                    required onChange={handleNameChange}
                />
                <br /><br />

                {/*//! Description Input */}
                <TextField
                    placeholder="Description of Kit"
                    required onChange={handleDescriptionChange}
                />
                <br /><br />

                {/*//! Backstory Input */}
                <TextField sx={{ width: "500px" }}
                    placeholder="Character Backstory"
                    rows="12" multiline required
                    onChange={handleBackstoryChange}
                />
                <br /><br />

                {/*//! Url Input */}
                <TextField
                    placeholder="Description of Kit"
                    required onChange={handleUrlChange}
                />
                <br /><br />

                {/*//! Order Input */}
                <TextField
                    placeholder="Order"
                    required onChange={handleOrderChange}
                />
                <br /><br />

            </form>

        </>
    )

}; // End editInformation()

export default EditInformation;
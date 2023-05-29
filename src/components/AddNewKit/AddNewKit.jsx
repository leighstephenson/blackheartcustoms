//todo imports here
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';

//todo need to add a form here where users can add all the kit info and add that to the DB - then MOVE ON to add a photo associated
//todo -with that id
//todo form needs to insert into the kits table on db

function AddNewKit() {

    //! Stores our kits
    const kits = useSelector(store => store.kits);

    //! States
    let [newKit, setNewKit] = useState({ kitName: '', description: '', backstory: '' })
    let [allKits, setAllKits] = useState([])
    let [lastKitAdded, setLastKitAdded] = useState({})

    //! Hooks
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_KITS' });
        setAllKits(kits);
        setLastKitAdded(kits[kits.length - 1]);
        console.log("all kits in UE", kits);
        console.log(kits.length);
        if (kits.length > 0) {
            console.log("all kits in UE", kits);
            setLastKitAdded(kits[kits.length - 1]);
            console.log('last kit added', lastKitAdded);
      } 
    }, []);

 
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
        setNewKit({ kitName: '', description: '', backstory: ''});
  
        setAllKits([]);      console.log('last kit in db', lastKitAdded)
  ;      //history.push(`/uploadImages/${1}`);
}


    //! What displays
    return (

        <>
            {allKits.length === 0 ? (
				<h2>Loading</h2>
			) : (
                <>
                {JSON.stringify(allKits)}  
                <Typography variant="h4"> Add Info For New Kit </Typography>
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
                </>
            )}
        </>
    )
}; //End AddNewKit

export default AddNewKit; 
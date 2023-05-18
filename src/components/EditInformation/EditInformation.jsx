//TODO imports here
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


function EditInformation() {

    //! Fetch selected
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_KIT', payload: id });
    }, []);

    //! Our hooks
    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams();

    //! Stores our kits
    const kits = useSelector(store => store.kits);
    const selectedKit = useSelector((store) => store.selectedKit);

    //! States
    const [name, setKitName] = useState(selectedKit.name);
    const [description, setKitDescription] = useState(kits.description);
    const [backstory, setKitBackstory] = useState(kits.backstory);
    const [url, setKitUrl] = useState(kits.url);
    const [order, setKitOrder] = useState(kits.order);



    //! Back to dashboard
    const goBack = () => { history.push('/dashboard') }
    //TODO should I have the back button go back to dash or back to selection?
    //TODO Add a form here that will take in current values for kits and 
    //TODO allow us to edit them. Edits will UPDATE the database

    //! handleChange - need one for EACH value that can change. 
    // kit: "name", "description", "backstory", "url", "order"

    const handleNameChange = (event) => {
        setKitName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setKitDescription(event.target.value);
    };

    const handleBackstoryChange = (event) => {
        setKitBackstory(event.target.value);
    };

    const handleUrlChange = (event) => {
        setKitUrl(event.target.value);
    };

    const handleOrderChange = (event) => {
        setKitOrder(event.target.value);
    };

    //! Submit
    const submitChanges = (event) => {
        event.preventDefault();
        dispatch({ type: 'EDIT_KIT', payload: { name, description, backstory, url, order } 
    })
        history.push('/editExistingKit');
    }
    //TODO maybe add a success page for a stretch??



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

            <form onSubmit={submitChanges} autoComplete="off">

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
                    placeholder="URL"
                    required onChange={handleUrlChange}
                />
                <br /><br />

                {/*//! Order Input */}
                <TextField
                    placeholder="Order"
                    required onChange={handleOrderChange}
                />
                <br /><br />

                {/*//! Submit Button */}
                <Button type="submit">
                    Submit
                </Button>

            </form>

        </>
    )

}; // End editInformation()

export default EditInformation;
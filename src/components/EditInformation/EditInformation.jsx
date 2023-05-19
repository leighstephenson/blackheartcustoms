//TODO imports here
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


function EditInformation() {

    //! Fetch selected kit
    useEffect(() => {
        dispatch({ type: 'FETCH_SELECTED_KIT', payload: id });
    }, []);

    //! Hooks
    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams();

    //! Stores our kits
    // const kits = useSelector(store => store.kits);
    const selectedKit = useSelector((store) => store.selectedKit);

    //! States
    const [name, setKitName] = useState(selectedKit.name);
    const [description, setKitDescription] = useState(selectedKit.description);
    const [backstory, setKitBackstory] = useState(selectedKit.backstory);
    const [url, setKitUrl] = useState(selectedKit.url);
    const [order, setKitOrder] = useState(selectedKit.order);


    //! Back to dashboard
    const goBack = () => { history.push('/dashboard') }
    //TODO should I have the back button go back to dash or back to selection?
    //TODO Still getting a 404 error


    //! handleChange - need one for EACH value that can change. 
    // kit: "name", "description", "backstory", "url", "order"
    const handleNameChange = (event) => {
        setKitName(event.target.value);
        console.log(name);
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
        dispatch({
            type: 'EDIT_KIT', payload: { id, name, description, backstory, url, order }
        })
        history.push('/editExisting');
    };
    //TODO maybe add a progress bar and success page for a stretch??


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
            <h1> Edit Information </h1>

            <img src={selectedKit.url} width='200' />

            <br />
            <br />



            {/*//! Form to input new Kit information  
            name, description, backstory, url, order */}

            <form onSubmit={submitChanges} autoComplete="off">

                {/*//! Name Input */}
                <TextField
                    label="Name"
                    defaultValue={selectedKit.name}
                    onChange={handleNameChange}
                    required
                />
                <br /><br />

                {/*//! Description Input */}
                <TextField
                    label="Description"
                    defaultValue={selectedKit.description}
                    onChange={handleDescriptionChange}
                    rows="12"
                    required
                />
                <br /><br />

                {/*//! Backstory Input */}
                <TextField
                    label="Character Backstory"
                    defaultValue={selectedKit.backstory}
                    onChange={handleBackstoryChange}
                    rows="12"

                />
                <br /><br />

                {/*//! Url Input */}
                <TextField
                    label="URL"
                    defaultValue={selectedKit.url}
                    onChange={handleUrlChange}
                    rows="12"
                    required
                />
                <br /><br />

                {/*//! Order Input */}
                <TextField
                    label="Order in Display"
                    placeholder="Order"
                    defaultValue={selectedKit.order}

                    required onChange={handleOrderChange}
                />
                <br /><br />

                {/*//! Submit Button */}
                <Button type="submit" variant="outlined"
                    sx={{
                        margin: 3,
                        color: 'black',
                        borderColor: 'black',
                        backgroundColor: 'lightGrey',
                        ':hover': {
                            bgcolor: 'salmon',
                        },

                    }}>
                    Submit
                </Button>

                <Button variant ="outlined" onClick={deleteKit}
                    sx={{
                        margin: 3,
                        color: 'black',
                        borderColor: 'black',
                        backgroundColor: 'lightGrey',
                        ':hover': {
                            bgcolor: 'red',
                        },
                    }}
                >
                    Delete Kit
                </Button>

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

            </form>

        </>
    )

}; // End editInformation()

export default EditInformation;
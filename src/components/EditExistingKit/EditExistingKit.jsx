import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

function EditExistingKit() {

    //! Our hooks
    const dispatch = useDispatch();
    const history = useHistory();

 
    //TODO Also need to add "back to dashboard" button later

    //! Stores our kits
    const kits = useSelector(store => store.kits);

    //! Sets selected kit and brings user to edit information
    const kitSelectionToEdit = (kit) => {
        dispatch({ type: 'SET_SELECTED_KIT', payload: kit });
        history.push('/editInformation')
    };

    //! Fetch the list of movies
    useEffect(() => {
        dispatch({ type: 'FETCH_KITS' });
    }, []);


    //! What displays
    return (
        <>
        <h1> Edit existing kit </h1>

            <div className="container">

                <div className="grid">
                    <div className="grid-col grid-col_8">
                       

                        {kits.map(kit => {
                            return (
                                <Grid key={kit.id} sx={{
                                    display: 'block',
                                    width: 300,
                                    justifyContent: 'center',
                                }}>
                                    <div>
                                        <h3> {kit.name} </h3>
                                        <img src={kit.url} alt={kit.name} />
                                    </div>
                                    <br />

                                    <button onClick={() => kitSelectionToEdit (kit)}> Edit this kit </button>
                                </Grid>
                            );
                        })}


                    </div>
                </div>
            </div>
        </>
    )
} // Ends EditExistingKit ()

export default EditExistingKit
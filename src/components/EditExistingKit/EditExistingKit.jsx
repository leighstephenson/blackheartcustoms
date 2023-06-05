import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import { Typography } from "@mui/material";
import { Button } from '@mui/material';
import './EditExistingKit.css';

function EditExistingKit() {

    //! Our hooks
    const dispatch = useDispatch();
    const history = useHistory();

    //! Back to dashboard
    const goBack = () => { history.push('/dashboard') }

    //! Stores our kits
    const kits = useSelector(store => store.kits);

    //! Sets selected kit and brings user to edit information
    const kitSelectionToEdit = (kit) => {
        dispatch({ type: 'SET_SELECTED_KIT', payload: kit });
        history.push(`/editInformation/${kit.id}`)
    };

    //! Use effect to make the page load at the position I want
    useEffect(() => {
        window.scrollTo(0, 170)
      }, [])

    //! Fetch the list of kits
    useEffect(() => {
        dispatch({ type: 'FETCH_KITS' });
    }, []);


    //! What displays
    return (
        <>
            <br />
            <Typography variant="h4"
                sx={{ textAlign: 'center' }}>
                Edit Existing Kit
            </Typography>

            <br /> <br />

            <center>
                <button className="btn" onClick={goBack}>
                    Back
                </button>
            </center>

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
                                    <Card
                                        sx={{
                                            textAlign: 'center',
                                            padding: 1,
                                            marginBottom: 2,
                                            boxShadow: 5,
                                        }}>
                                        <h3> {kit.name} </h3>
                                        <img src={kit.photo} alt={kit.name} />

                                        <br />

                                        <center>
                                            <button className="edit-btn" onClick={() => kitSelectionToEdit(kit)}
                                                sx={{
                                                    display: 'block',
                                                    alignContent: 'center',
                                                }}>
                                                Edit this kit
                                            </button>
                                        </center>
                                    </Card>
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
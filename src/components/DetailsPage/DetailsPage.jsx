import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import './DetailsPage.css';


function DetailsPage() {

    //! Our hooks
    const history = useHistory();

    //! Stores our selected kit
    const selectedKit = useSelector((store) => store.selectedKit);

    //! Leads back to home
    const goBack = () => { history.push('/') }

    //! What displays
    return (
        <>
            <Card variant='outlined' sx={{
                boxShadow: 10,
                margin: 1,


            }}>
                <CardContent>
                    <Typography variant="h7"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontStyle: 'italic',
                        }}>
                        Details for
                    </Typography>

                    <Typography variant="h3"
                        sx={{
                            fontStyle: 'italic',
                            textAlign: 'center',


                        }}>
                        {selectedKit.name}
                    </Typography>

                    <br />

                    <Typography>
                        <img src={selectedKit.photo} />
                    </Typography>

                    <br />

                    <Typography>
                        {selectedKit.description}
                    </Typography>

                    <br />

                    <Typography>
                        {selectedKit.backstory}
                    </Typography>


                </CardContent>
            </Card>

            <br/>

            <center>
                <button className="btn" variant="outlined" onClick={goBack}>
                  
                    Back
                </button>
            </center>



        </>
    )
}; // end of DetailsPage()

export default DetailsPage;
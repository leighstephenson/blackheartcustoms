import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
                margin: 5,


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
            <center>
                <Button variant="outlined" onClick={goBack}
                    sx={{
                        justifyContent: "center",
                        color: 'black',
                        borderColor: 'black',
                        borderWidth: 2,
                        backgroundColor: '#A8A900',
                        ':hover': {
                            bgcolor: '#C21916',
                        },
                    }}>
                    Go Back
                </Button>
            </center>



        </>
    )
}; // end of DetailsPage()

export default DetailsPage;
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
                    <Typography variant="h7">
                        Details for
                    </Typography>

                    <Typography variant="h3"
                        sx={{
                            fontStyle: 'italic'

                        }}>
                        {selectedKit.name}
                    </Typography>

                    <br />

                    <Typography>
                        <img src={selectedKit.url} />
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

        </>
    )
}; // end of DetailsPage()

export default DetailsPage;
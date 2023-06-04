import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import './DetailsPage.css';


function DetailsPage() {

    //! Our hooks
    const history = useHistory();

    //! Stores our selected kit
    const selectedKit = useSelector((store) => store.selectedKit);

    //! Use effect to make the page load to the TOP of the page.
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    //! Leads back to home
    const goBack = () => { history.goBack() }

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

                    <Typography sx={{ }}>
                        Description:
                    </Typography>

                    <Typography>
                        {selectedKit.description}
                    </Typography>

                    <br />
                    <Typography sx={{ }}>
                        Backstory:
                    </Typography>

                    <Typography>
                        Character Backstory: {selectedKit.backstory}
                    </Typography>


                </CardContent>
            </Card>

            <br />

            <center>
                <button className="btn" variant="outlined" onClick={goBack}>
                    Back
                </button>
            </center>



        </>
    )
}; // end of DetailsPage()

export default DetailsPage;
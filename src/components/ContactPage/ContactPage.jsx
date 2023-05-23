import React from 'react';
import { Typography } from '@mui/material';
import './ContactPage.css';


function ContactPage() {

  //! What displays
  return (
    <div className="container">

      <Typography variant="h3"
        sx={{ textAlign: "center", }}>
        Contact
      </Typography>

      <br />

      <Typography>

        The best place to reach us is via email at Goblackheart@comcast.NET

        <br />
        <br />

        Serious inquiries only please, it takes a considerable amount of time to
        provide quotes on painting and shipping costs.

      </Typography>

      <br />
      <hr />

      <Typography variant="h5"> Commission process: </Typography>
      
      <br/>
      
      <Typography> If hiring us for a project, you can make any request and we will do our best to fulfill it.
        We will provide in-progress photos for approval and make changes as needed.

        <br />
        <br />

        Every kit is airbrushed and hand-painted, we spend several hours on each piece
        to ensure that you are proud to display our work.
      </Typography>

    </div>
  );
} // End ContactPage()

export default ContactPage;

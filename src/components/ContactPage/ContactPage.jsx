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

      {/* Contact info */}
      <Typography variant='h6'>

        Send us an e-mail: <br />
        <a href="mailto:goblackheart@comcast.net">Goblackheart@comcast.NET</a>
        <br /> <hr />

        Check out our website: <br />
        {/* Opens Black Heart's website in a new tab */}
        <a href={"https:blackheartmodels.com"} target="_blank"> Www.blackheartmodels.com</a>
        <br /> <hr />

        Follow us on social media: <br />
        {/* Opens Black Heart's LinkTree in a new tab */}
        <a href={"https://linktr.ee/blackheartmodels"} target="_blank"> Visit our Linktree </a>
      </Typography>

      <br />

      <center>
        <img src="images/blackheart-postcard.jpg" alt="Black Heart Postcard" />
      </center>

      <br /> <hr />

      {/* Commission info */}
      <Typography variant="h5" sx={{ textAlign: 'center' }}> Commission process: </Typography>

      <br />

      <Typography> If hiring us for a project, we will do our best to fulfill every request.
        We will provide in-progress photos for approval and make changes as needed.

        <br /> <br />

        Every kit is airbrushed and hand-painted. We spend several hours on each piece
        to ensure that you are proud to display our work.

        <br /> <br />

        Please email us for a quote. Serious inquiries only please, thank you!
      </Typography>

    </div>
  );
} // End ContactPage()

export default ContactPage;

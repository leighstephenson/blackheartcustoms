import React from 'react';
import { Typography, Link } from '@mui/material';
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
      <Typography>

        The best place to reach us is via email at Goblackheart@comcast.NET

        <br /> <br />

        Serious inquiries only please, it takes a considerable amount of time to
        provide quotes on painting and shipping costs.

      </Typography>
      <br />

      {/* Opens Black Heart's LinkTree in a new tab */}
        <a href={"https://linktr.ee/blackheartmodels"} target="_blank"> Visit our Linktree for all things Black Heart</a>
      
      <br /> <br />
      <img src="images/blackheart-postcard.jpg" alt="Black Heart Postcard" />

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

        Please email us for a quote. Thank you!
      </Typography>

    </div>
  );
} // End ContactPage()

export default ContactPage;

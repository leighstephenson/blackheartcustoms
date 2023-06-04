import React from 'react';
import { Typography } from '@mui/material';
import "./AboutPage.css";

//TODO Add photos, QR code for black heart and for me 
//TODO Maybe add more history on garage kit hobby

function AboutPage() {
  return (
    <div className="container">
      <div>
        <Typography variant="h3"
          sx={{
            textAlign: "center",
          }}>
          About
        </Typography>

        <br /> <br />

        <Typography>
          Black Heart Models is a division of Black Heart
          Enterprises, LLC and was founded by George Stephenson
          in 2009. Black Heart Models is a collaboration of artists
          and artisans working together to create horror/sci-fi/fantasy
          products for collectors, hobbyists, miniaturists and other
          fans of beautiful, spooky, fantastic, and/or weird stuff.
          Our focus is always on quality and customer service.
        </Typography>

        <br />

        <Typography>
          We sell a variety of products in our online store,
          in person at various hobby conventions around the country, through distributors,
          and are expanding to retail stores, too.
        </Typography>

        <br /> <hr /> <br />

        <Typography>
          This app was created by me, Leigh Stephenson, for my Prime Digital Academy
          solo project. I knew from the beginning that I wanted to create something
          that could also benefit the family business. I look forward to showing this
          app to potential customers in the future.
        </Typography>

        <br />

        <center>
          <Typography variant="h6"> Let's connect on LinkedIn!</Typography>
          <img src="images/qr-code.jpg" width='70%' />
        </center>

        <br />

        <Typography variant='h6'>
          Technologies used:
        </Typography>
        <ul>
          <li> React, Redux, AWS, Material UI, Express, PostgresSQL, Postico, Axios </li>
        </ul>

        <Typography variant='h6'>
          Future developments:
        </Typography>
        <p> 
          There are many things I could add to improve
          this app further. Here are a few ideas:
        </p>
<ul>
  <li> Allow each kit to have multiple photos</li>
  <li> Implement a "like" or "reaction" feature </li>
  <li> Allow users to "favorite" and store an item</li>
</ul>
      </div>
    </div>
  );
}

export default AboutPage;

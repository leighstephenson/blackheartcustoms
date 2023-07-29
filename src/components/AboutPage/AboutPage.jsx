import React from 'react';
import { Typography } from '@mui/material';
import "./AboutPage.css";

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
        <center>
          <div className='webText'>

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

            <Typography variant='h6'> Please note that this app is intended for mobile viewing. </Typography>

            <br />

            <Typography>
              Black Heart Customs was created by me, Leigh Stephenson, for my Prime Digital Academy
              solo project. I knew from the beginning that I wanted to create something
              that could also benefit the family business. I look forward to showing this
              app to potential customers in the future.
            </Typography>

            <br />
          </div>
        </center>

        <center>
          <Typography variant="h6"> Let's connect on LinkedIn!</Typography>
          <div className='qrCode'>
            <img src="images/flowcode.jpg" width='70%' />
          </div>
        </center>

        <br />

        <center>
          <div className='techDiv'>
            <Typography variant='h7'>
              Technologies used: React, Redux, AWS s3, Node,Express, PostgresSQL, Postico, Axios,  Material UI, CSS
            </Typography>
          </div>
        </center>
      </div>

    </div>
  );
}

export default AboutPage;

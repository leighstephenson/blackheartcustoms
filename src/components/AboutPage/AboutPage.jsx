import React from 'react';
import { Typography } from '@mui/material';
import "./AboutPage.css";

//TODO Add photo 
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

        <br />
        <br />

        <Typography>
          Black Heart Models is a division of Black Heart
          Enterprises, LLC and was founded by George Stephenson
          in 2009. Black Heart Models is a collaboration of artists
          and artisans working together to create horror/sci-fi/fantasy
          products for collectors, hobbyists, miniaturists and other
          fans of beautiful, spooky, fantastic, and/or weird stuff.
          Our focus is always on quality and customer service.
        </Typography>
<br/>
        <Typography>
          We sell a variety of products in our online store, 
          in person at various hobby conventions around the country, through distributors,
          and are expanding to retail stores too. We have some microMANIA™ busts at 
          The Source comic book store on Snelling Ave for any locals who may
          want to check them out. 
        </Typography>

        <br />
        <hr />
        <br />

        <Typography>
          This app was created by me, Leigh Stephenson, for my Prime Digital Academy solo project.
          I knew from the beginning that I wanted to create something
          that would also benefit the family business. I've watched Black Heart expand so much from the
          beginning and it has been amazing that grown to where it is now. I'm really proud of this 
          business that my dad has built and will take every opportunity to support it. 
        </Typography>

      </div>
    </div>
  );
}

export default AboutPage;

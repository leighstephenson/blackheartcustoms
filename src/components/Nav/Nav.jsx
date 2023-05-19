import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  //TODO add logo to the header, finish styling
  return (
    <>
  {/* <img src="/public/images/blackheartlogo.png"
  height="50px" alt="Black Heart Models Logo" /> */}

      <div className="nav">

        <Link to="/home">
          <h2 className="nav-title">Black Heart Customs</h2>
        </Link>


        {/* If no user is logged in, show these links */}
        <div>

          {!user.id && (
            <>
              {/* // If there's no user, show these links */}

              <Link className="navLink" to="/home">
                Home
              </Link>

              <Link className="navLink" to="/about">
                About
              </Link>

              <Link className="navLink" to="/contact">
                Contact
              </Link>

              <Link className="navLink" to="/login">
                Login
              </Link>

            </>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link className="navLink" to="/home">
                Home
              </Link>

              <Link className="navLink" to="/about">
                About
              </Link>

              <Link className="navLink" to="/contact">
                Contact
              </Link>

              <Link className="navLink" to="/dashboard">
                Dashboard
              </Link>
              <LogOutButton className="navLink" />
            </>
          )}


        </div>
      </div>
    </>
  );
}

export default Nav;

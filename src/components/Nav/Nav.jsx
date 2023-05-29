import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>


      <div className="nav">

        <img src="/images/blackheartlogo.jpg"
          alt="Black Heart Models Logo" width="110" height="120" />

        <Link to="/home">
          <h2 className="nav-title">Black Heart Customs</h2>
        </Link>

      </div>

      {/* If no user is logged in, show these links */}
      <div className="navBar">

        {!user.id && (
          <center>

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
          </center>

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
    </>
  );
}

export default Nav;

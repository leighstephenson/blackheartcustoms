import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../Dashboard/Dashboard';
import ContactPage from '../ContactPage/ContactPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import UploadImages from '../UploadImages/UploadImages';
import EditExistingKit from '../EditExistingKit/EditExistingKit';
import EditInformation from '../EditInformation/EditInformation';
import AddNewKit from '../AddNewKit/AddNewKit';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//! Theme for MUI styling
const theme = createTheme({
  palette: {
    primary: {
      main: '#A8A900',
    },
    secondary: {
      main: '#C70039'
    },
  }
}); // End theme

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}

            {/* shows AboutPage at all times (logged in or not) */}
          //! home
            <Route exact path="/home">
              <LandingPage />
            </Route>

          //! about
            <Route exact path="/about">
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          //! user / dashboard
            {/* logged in shows UserPage else shows LoginPage */}
            {/*todo will be changing to dashboard */}
            <ProtectedRoute exact path="/dashboard">
              <UserPage />
            </ProtectedRoute>

          //! Add New Kit
            <ProtectedRoute exact path="/addNewKit">
                <AddNewKit />
            </ProtectedRoute>

          //! Upload Images
            <ProtectedRoute exact path="/uploadImages/:id">
              <UploadImages />
            </ProtectedRoute>

          //! Edit Existing Kit
            <ProtectedRoute exact path="/editExisting">
              <EditExistingKit />
            </ProtectedRoute>

          //! Edit Information
            <ProtectedRoute exact path="/editInformation/:id">
              <EditInformation />
            </ProtectedRoute>

        //! contact
            <Route exact path="/contact">
              <ContactPage />
            </Route>

          //! login
            <Route exact path="/login">
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/dashboard" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>
            //! details
            <Route exact path="/details">
              <DetailsPage />
            </Route>

          //! registration, will be getting rid of direct paths
            <Route exact path="/registration">

              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/dashboard" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>



            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>

          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
} // end app()

export default App;

import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import kits from './allKits.reducer'
import selectedKit from './selectedKit.reducer';
import allPhotos from './allPhotos.reducer';
import selectedPhotos from './selectedPhoto.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

//TODO Create more reducers
//! For list of kits, selected kit, more tbd

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  kits, // contains all kits on server. Used to display on home/landing
  selectedKit, //will display on details page
  allPhotos, // will display photos on home/landing
  selectedPhotos // will display with info on details page
});

export default rootReducer;

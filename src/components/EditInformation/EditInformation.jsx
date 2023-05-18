//TODO imports here
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function EditInformation(){

        //! Our hooks
        const dispatch = useDispatch();
        const history = useHistory();

            //! Stores our kits
    const kits = useSelector(store => store.kits);

    //TODO Add a form here that will take in current values for kits and 
    //TODO allow us to edit them. Edits will UPDATE the database
    return (
        <>
        <h1> Edit Information </h1>
        </>
    )
} // End editInformation()

export default EditInformation;
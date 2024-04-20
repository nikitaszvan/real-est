import React, { useState, useContext } from 'react';
import './sign-in-up.styles.css';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, Link, Redirect } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

const SignInUp = () => {
    const [toDashboard, setToDashboard] = React.useState(false);
    const { setCurrentUser } = useContext(UserContext);

    // if (toDashboard === true) {
    //     return <Navigate to="/" />;
    //   }
    const navigate = useNavigate();

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
        navigate('/');
        // const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='sign-in-page-container'>
            <button onClick={ logGoogleUser}
            >Sign In With Google</button>
        </div>
    );
}

export default SignInUp;
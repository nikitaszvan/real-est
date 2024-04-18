import React from 'react';
import './sign-in-up.styles.css';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignInUp = () => {
    const logGoogleUser = async () => {
        const test = await signInWithGooglePopup();
        window.location.href = '/'
        console.log(test);
        // const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='sign-in-page-container'>
            <button onClick={ logGoogleUser }>Sign In With Google</button>
        </div>
    );
}

export default SignInUp;
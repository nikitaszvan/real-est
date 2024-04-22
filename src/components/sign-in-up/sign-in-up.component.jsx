import React, { useState, useContext, useEffect } from 'react';
import './sign-in-up.styles.css';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    createAuthUserWithEmailAndPassword,
    signInAuthUserWithEmailAndPassword,
 } from '../../utils/firebase/firebase.utils';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, Link, Redirect } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignInUp = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);
    const [signInButtonType, setSignInButtonType] = useState('submit');
    const [signUpButtonType, setSignUpButtonType] = useState('button');
    const [signUpMode, setSignUpMode ] = useState(false);

    const navigate = useNavigate();
    const clearFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSignUp = async () => {

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password,
            );

            await createUserDocumentFromAuth(user, { displayName });

            clearFormFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/weak-password' :
                    alert('Password must be at least 6 characters');
                    break;
                case 'auth/email-already-in-use' :
                    alert('Cannot create user, email already in use');
                    break;
                default:
                    console.log('user creation encountered an error', error);
            }
        }
    }

    const handleSignIn = async () => {

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            clearFormFields();
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleButtonClick = (event, type) => {
        if (type === 'signIn' && event.target.getAttribute('buttonType') === 'submit') {
            handleSignIn();
        } else if (type === 'signIn' && event.target.getAttribute('buttonType') === 'button') {
            setSignUpMode(false);
            setSignInButtonType('submit');
            setSignUpButtonType('button');
        } else if (type === 'signUp' && event.target.getAttribute('buttonType') === 'submit') {
            handleSignUp();
        } else if (type === 'signUp' && event.target.getAttribute('buttonType') === 'button') {
            setSignUpMode(true);
            setSignInButtonType('button');
            setSignUpButtonType('submit');
        }
    };

    const logGoogleUser = async () => {

        try {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
        navigate('/');
        const userDocRef = await createUserDocumentFromAuth(user);
        }
        catch (error) {
            switch (error.code) {
                case 'auth/popup-closed-by-user':
                    console.error(error);
                    break;
            }
        }
    }

    console.log('status of sign up button:', signUpButtonType, 'status of sign in button:', signInButtonType === 'submit' ? 'button' : 'submit'  );

    return (
        <div className='sign-in-page-container'>
            <div className='email=password-section'>
                <h1>Sign {signUpMode ? <span>Up</span> : <span>In</span>} with your email and password</h1>
                {/* <form> */}
                {signUpMode && (
                    <FormInput
                        label='Display Name'
                        type='text'
                        onChange={ handleChange }
                        name='displayName'
                        value={ displayName }
                    />)}
                    <FormInput
                        label='Email'
                        type='email'
                        onChange={ handleChange }
                        name='email'
                        value={ email }
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        onChange={ handleChange }
                        name='password'
                        value={ password }
                    />
                    {signUpMode && (
                    <FormInput
                        label='Confirm Password'
                        type='password'
                        onChange={ handleChange }
                        name='confirmPassword'
                        value={ confirmPassword }
                    />
                    )}
                    {!(signUpMode) && <label htmlFor='button'>No account?</label>}
                    <button buttonType={ signUpButtonType } onClick={ (event) => handleButtonClick(event, 'signUp') }>Sign Up</button>
                    {(signUpMode) && <label htmlFor='button'>Have an account?</label>}
                    <button buttonType={ signInButtonType } onClick={ (event) => handleButtonClick(event, 'signIn') }>Sign In</button>
                {/* </form> */}
            </div>
            <div className="google-signin-section">
                <button onClick={ logGoogleUser}>Sign In With Google</button>
            </div>
        </div>
    );
}

export default SignInUp;
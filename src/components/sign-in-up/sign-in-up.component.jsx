import React, { useState, useContext, useEffect } from 'react';
import './sign-in-up.styles.css';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    createAuthUserWithEmailAndPassword,
    signInAuthUserWithEmailAndPassword,
    updateAuthCurrentUser,
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

    const successfulSignUp = () => {
        clearFormFields();
        handleButtonClick(null, 'switchToSignInMode');
    }

    function hasAtLeastTwoWords(input) {
        const pattern = /^\s*\w+(\s+\w+)+\s*$/;
        return pattern.test(input);
    }

    // function formatString(input) {
    //    return input.trim().split(/ +/).join(' ');
    // }

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        if (!hasAtLeastTwoWords(displayName)) {
            alert('full name must have at least two words');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password,
            );

            await updateAuthCurrentUser(
                displayName.trim().split(/ +/).join(' '),
            );

            console.log('create', user);
            await createUserDocumentFromAuth(user, { displayName: displayName.trim().split(/ +/).join(' ') });
            successfulSignUp();
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
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            console.log('sign in', user);
            clearFormFields();
            setCurrentUser(user);
            navigate('/');
        } catch (error) {
            console.log('sign in failed');
            switch (error.code) {
                case 'auth/invalid-credential':
                    alert('Email is not found, please create an account');
            }
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
        } else if (type === 'switchToSignInMode') {
            setSignUpMode(false);
            setSignInButtonType('submit');
            setSignUpButtonType('button');
        } else if (type === 'signUp' && event.target.getAttribute('buttonType') === 'submit') {
            handleSignUp();
        } else if (type === 'switchToSignUpMode') {
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

    const inputs = document.getElementsByClassName('noSpaceInput');
    Array.from(inputs).map((input)=> {
        input.addEventListener('keydown', function(event) {
            if (event.keyCode === 32 || event.key === " ") {
                event.preventDefault();
            }
        });
    });

    const emailInput = document.getElementsByClassName('noDoubleSpace');
    Array.from(emailInput).map((input)=> {
        input.addEventListener('keydown', function(event) {
            if (event.keyCode === 32) {
                if (input.value.endsWith(" ")) {
                    event.preventDefault();
                }
            }
        })
    });

    return (
        <div className='sign-in-page-container'>
            <div className='email-password-section'>
                <h1>Sign {signUpMode ? <span>Up</span> : <span>In</span>} with your email and password</h1>
                <form onClick={(event)=> {event.preventDefault()}}>
                {signUpMode && (
                    <FormInput
                        label='First and Last Name'
                        classInput={'full-name-input'}
                        type='text'
                        onChange={ handleChange }
                        name='displayName'
                        value={ displayName }
                    />)}
                    <FormInput
                        label='Email'
                        classInput={'email-input'}
                        type='email'
                        onChange={ handleChange }
                        name='email'
                        value={ email }
                    />
                    <FormInput
                        label='Password'
                        classInput={'password-input'}
                        type='password'
                        onChange={ handleChange }
                        name='password'
                        value={ password }
                    />
                    {signUpMode && (
                    <FormInput
                        label='Confirm Password'
                        classInput={'confirm-password-input'}
                        type='password'
                        onChange={ handleChange }
                        name='confirmPassword'
                        value={ confirmPassword }
                    />
                    )}
                    {!(signUpMode) && (
                        <>
                            <label htmlFor='button' style={{display: 'inline', fontSize: '14px'}}>No account?</label>
                            <p className='switch-sign-method' style={{display: 'inline', marginLeft:'5px', textDecoration: 'underline', fontSize: '14px'}} buttonType={ signUpButtonType } onClick={ (event) => handleButtonClick(event, 'switchToSignUpMode') }>Sign Up instead</p>
                            <div className="all-buttons-container">
                                <button className='button-container' buttonType={ signInButtonType } type='submit' onClick={ (event) => handleButtonClick(event, 'signIn') }>Sign In</button>
                                <button onClick={ logGoogleUser } className='button-container google-sign-in'>Sign In With Google</button>
                            </div>
                            
                        </>
                    )}
                    {signUpMode && (
                        <>
                            <label htmlFor='button' style={{display: 'inline', fontSize: '14px'}} >Have an account?</label>
                            <p className='switch-sign-method' style={{display: 'inline', marginLeft:'5px', textDecoration: 'underline', fontSize: '14px'}} buttonType={ signUpButtonType } onClick={ (event) => handleButtonClick(event, 'switchToSignInMode') }>Sign In instead</p>
                            <div className="all-buttons-container">
                                <button className='button-container' buttonType={ signUpButtonType } type='submit' onClick={ (event) => handleButtonClick(event, 'signUp') }>Sign Up</button>
                                <button onClick={ logGoogleUser } className='button-container google-sign-in'>Sign In With Google</button>
                            </div>
                            
                        </>
                    )}
                    </form>
            </div>
        </div>
    );
}

export default SignInUp;
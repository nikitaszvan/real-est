import React, { useState, useContext } from 'react';
import './sign-in-up.styles.css';
import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
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
    const [showFirstAndLast, setShowFirstAndLast] = useState(false);
    const [buttonType, setButtonType] = useState('button');

    const navigate = useNavigate();

    const clearFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({...formFields, [name]: value});
    }

    const handleSignUpClick = () => {
        setShowFirstAndLast(!showFirstAndLast);
        setButtonType(buttonType === 'submit' ? 'button' : 'submit');
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

    console.log('status of sign up button:', buttonType, 'status of sign in button:', buttonType === 'submit' ? 'button' : 'submit'  );

    return (
        <div className='sign-in-page-container'>
            <div className='email=password-section'>
                <h1>Sign {showFirstAndLast ? <span>Up</span> : <span>In</span>} with your email and password</h1>
                <form onSubmit={ handleSubmit }>
                {showFirstAndLast && (
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
                    {showFirstAndLast && (
                    <FormInput
                        label='Confirm Password'
                        type='password'
                        onChange={ handleChange }
                        name='confirmPassword'
                        value={ confirmPassword }
                    />
                    )}
                    {!(showFirstAndLast) && <label htmlFor='button'>No account?</label>}
                    <button type={ buttonType } onClick={ handleSignUpClick }>Sign Up</button>
                    {(showFirstAndLast) && <label htmlFor='button'>Have an account?</label>}
                    <button type={ buttonType === 'submit' ? 'button' : 'submit' } onClick={ handleSignUpClick }>Sign In</button>
                </form>
            </div>
            <div className="google-signin-section">
                <button onClick={ logGoogleUser}>Sign In With Google</button>
            </div>
        </div>
    );
}

export default SignInUp;
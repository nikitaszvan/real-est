import React, { createContext, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Footer from './components/footer/footer.component';
import SignInUp from './components/sign-in-up/sign-in-up.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGooglePopup } from './utils/firebase/firebase.utils';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Redirect } from 'react-router-dom';

import { setCurrentUser } from './store/user/user.action';


import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        console.log(user.displayName, 'is currently logged in');
      }
      else {
        console.log('no one is currently logged in');
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
<Router>
  <NavBar />
  <Routes>
    <Route path="/auth" element={<SignInUp />} /> 
    <Route path="/" element={<Dashboard />} />
  </Routes>
</Router>
  );
}

export default App;

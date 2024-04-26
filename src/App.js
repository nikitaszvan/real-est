import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Footer from './components/footer/footer.component';
import SignInUp from './components/sign-in-up/sign-in-up.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGooglePopup } from './utils/firebase/firebase.utils';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Redirect } from 'react-router-dom';

function App() {
  console.log('render');
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

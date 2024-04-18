import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Footer from './components/footer/footer.component';
import SignInUp from './components/sign-in-up/sign-in-up.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function App() {

  const [user, setUser] = React.useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGooglePopup();
      setUser(result.user); // Set the authenticated user
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };
  return (

<Router>
<NavBar />
<Switch>
  <Route path="/sign-in">
    {user ? <Redirect to="/dashboard" /> : <SignInUp />}
  </Route>
  <Route path="/dashboard">
    {user ? <Dashboard /> : <Redirect to="/sign-in" />}
  </Route>
  <Redirect from="/" to="/sign-in" />
</Switch>
</Router>
  );
}

export default App;

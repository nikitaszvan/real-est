import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Footer from './components/footer/footer.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

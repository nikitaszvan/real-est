import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';
import Dashboard from './components/dashboard/dashboard.component';
import Footer from './components/footer/footer.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;

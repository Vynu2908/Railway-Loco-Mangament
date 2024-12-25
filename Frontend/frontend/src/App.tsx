import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Button } from '@mui/material';
import AdminPage from './Pages/AdminPage'; // Create this component
import UserPage from './Pages/UserPage';   // Create this component

function App() {
  return (
    <Router>
      <div className="navbar">
        <h1>Railway Loco Management</h1>
      </div>
      <div className="main">
        <div className="admin-login">
          <Link to="/admin">
            <Button >Admin Login</Button>
          </Link>
        </div>
        <div className="user-login">
          <Link to="/user">
            <Button >User Login</Button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;

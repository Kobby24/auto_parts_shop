import logo from './logo.svg';
import './App.css';
import { Router, Route,Routes} from 'react-router-dom';
import SignupForm from './components/SignupForm'; // Adjust the path as necessary
import ResetPassword from './components/ResetPassword'; // Adjust the path as necessary 
import React from 'react';
import Header from './components/Header';
import Home from './componets/Home' // Adjust the path as necessary

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Define your routes here */}
          {/* Example: <Route path="/signup" component={SignupForm} /> */}
          <Route path="/signup" component={SignupForm} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/" component={Home} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

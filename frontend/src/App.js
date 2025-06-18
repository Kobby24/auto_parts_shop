import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs'
import Main from './pages/Main';
import SignupForm from './pages/SignupForm';
import  Login  from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route
            path="/brands/:brandName"
            element={
              <Main />
            }
          />

          {/* Add more routes here as needed */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

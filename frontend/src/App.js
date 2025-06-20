import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs'
import Main from './pages/Main';
import SignupForm from './pages/SignupForm';
import  Login  from './pages/Login';
import Product from './pages/Product';
import Payment from './pages/Payment';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/brands/:brandName/:modelName?"
            element={<Main />}
          />
          <Route
            path="/product/:brandName/:modelName/:prod"
            element={<Product />}
          />
          <Route path='/purchase/:id' element={<Payment />}/>
          <Route
            path="/brands/:brandName/:modelName/:prod"
            element={<Product />}
          />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

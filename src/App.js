import { Route , Routes } from 'react-router-dom';
import './App.css';
import Footer from './componets/Footer';

import Header from './componets/Header';
import Navbar from './componets/Navbar';

import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <>
       <Header />
       <Navbar />
       <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
       </Routes>
       <Footer  />
    </> 
  );
}

export default App;

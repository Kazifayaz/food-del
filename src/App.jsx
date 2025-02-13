import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LogInPopUp from './components/loginpopup/LogInPopUp';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      {showLogin && <LogInPopUp setUser={setUser} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

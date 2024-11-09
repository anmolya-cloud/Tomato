import React from 'react';
import Navbar from './components/Nav/Navbar';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/Home/Cart/PlaceOrder/PlaceOrder'
import Cart from './pages/Home/Cart/Cart'
import Fotter from './components/Fotter/Fotter';

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      </>
      
    </div>
    <Fotter/>
    </>
  )
}

export default App;

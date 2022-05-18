import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Catalogue from './pages/Catalogue';
import Product from './pages/Product';
import NavBarSub from './components/NavBarSub';
import BottomBar from './components/BottomBar';
import { Box } from '@mui/system';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';

function App() {
  return (
    <Router>
      <Box minHeight={"1080px"}>
        <NavBar />
        <NavBarSub />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingcart" element={<Cart />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Box>
      <BottomBar />
    </Router>
  );
}

export default App;

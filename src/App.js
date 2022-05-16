import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Catalogue from './pages/Catalogue';
import Product from './pages/Product';
import NavBarSub from './components/NavBarSub';

function App() {
  return (
    <Router>
        <NavBar />
        <NavBarSub />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shoppingcart" element={<Cart/>} />
          <Route path="/catalogue" element={<Catalogue/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
    </Router>
  );
}

export default App;

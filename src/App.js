import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

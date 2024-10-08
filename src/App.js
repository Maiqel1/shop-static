import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className='container'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

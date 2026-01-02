import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderPlaced from "./pages/OrderPlaced"
function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order-placed" element={<OrderPlaced/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

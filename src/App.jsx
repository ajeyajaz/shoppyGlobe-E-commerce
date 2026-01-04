import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderPlaced from "./pages/OrderPlaced"
import DetailPage from "./pages/Detail"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-placed" element={<OrderPlaced />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader";
import NotFoundPage from './pages/NotFound'

const HomePage = lazy(() => import('./pages/Home'));
const ProductDetailPage = lazy(() => import('./pages/Detail'));
const CartPage = lazy(() => import('./pages/Cart'));
const CheckOutPage = lazy(() => import('./pages/Checkout'));
const OrderPlacedPage = lazy(() => import('./pages/OrderPlaced'));


function App() {

  console.log(HomePage);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<Suspense fallback={<Loader />}><HomePage /></Suspense>}
          />
          <Route
            path='/products/:id'
            element={<Suspense fallback={<Loader />}><ProductDetailPage /></Suspense>}
          />
          <Route
            path="/cart"
            element={<Suspense fallback={<Loader />}><CartPage /></Suspense>}

          />
          <Route path="/checkout"
            element={<Suspense fallback={<Loader />}><CheckOutPage /></Suspense>}
          />
          <Route
            path="/order-placed"
            element={<Suspense fallback={<Loader />}><OrderPlacedPage /></Suspense>}
          />
          <Route path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

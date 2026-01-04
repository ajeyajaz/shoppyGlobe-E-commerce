import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

const HomePage = lazy(() => import('./pages/Home'));
const ProductDetailPage = lazy(() => import('./pages/Detail'));
const CartPage = lazy(() => import('./pages/Cart'));
const CheckOutPage = lazy(() => import('./pages/Checkout'));
const OrderPlacedPage = lazy(() => import('./pages/OrderPlaced'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));



function App() {

  console.log(HomePage);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<Suspense fallback={<p>loading...</p>}><HomePage /></Suspense>}
          />
          <Route
            path='/products/:id'
            element={<Suspense fallback={<p>loading...</p>}><ProductDetailPage /></Suspense>}
          />
          <Route
            path="/cart"
            element={<Suspense fallback={<p>loading....</p>}><CartPage /></Suspense>}

          />
          <Route path="/checkout"
            element={<Suspense fallback={<p>loading....</p>}><CheckOutPage /></Suspense>}
          />
          <Route
            path="/order-placed"
            element={<Suspense fallback={<p>loading....</p>}><OrderPlacedPage /></Suspense>}
          />
          <Route path="*"
            element={<Suspense fallback={<p>loading....</p>}><NotFoundPage/></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

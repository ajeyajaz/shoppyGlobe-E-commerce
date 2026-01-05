import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { lazy, Suspense } from "react"
import Loader from "./components/Loader";
import NotFoundPage from './pages/NotFound'

//lazy loaded pages
const HomePage = lazy(() => import('./pages/Home'));
const ProductDetailPage = lazy(() => import('./pages/Detail'));
const CartPage = lazy(() => import('./pages/Cart'));
const CheckOutPage = lazy(() => import('./pages/Checkout'));
const OrderPlacedPage = lazy(() => import('./pages/OrderPlaced'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
  {
    path: "/order-placed",
    element: <OrderPlacedPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
])

function App() {

  console.log(HomePage);

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <RouterProvider router={router}/>
      </Suspense>
    </>
  )
}

export default App

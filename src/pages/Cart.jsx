import { useSelector, useDispatch } from "react-redux"
import { removeCart } from '../redux/features/CartSlice'
import CartItem from "../components/CartItem"
import PriceDetail from "../components/PriceDetail"
import Button from "../components/Button"
import { Link } from "react-router-dom"
function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    // accepts productID
    const removeCartItem = (id) => {
        dispatch(removeCart({ id }))
    };

    return (
        <>
            <header className="border h-15 mb-5">
                <Link to='/'>Home</Link>
            </header>

            <div div className="max-w-5xl mx-auto">

                <h2 className="my-2 font-bold text-gray-600">{cartItems.length} ITEMS</h2>

                <div className="grid grid-cols-1 gap-x-2 gap-y-7 md:grid-cols-2">

                    <div className="flex  flex-col gap-2">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                onClick={removeCartItem}
                                item={item} />
                        ))}
                    </div>

                    {/* price details */}
                    <PriceDetail products={cartItems} className="border-l border-t border-gray-300" >
                        <Button variant='primary' className="p-2">place order</Button>
                    </PriceDetail>

                </div>
            </div>
        </>
    )
}

export default Cart
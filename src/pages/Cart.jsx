import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <>
            <div className="max-w-230 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3">

                {/* Cart items */}
                <div className="md:col-span-2 space-y-4">
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                {/* Price details
                <div className="border p-4 h-fit sticky top-20">
                    <p>PRICE DETAILS {`(${cartItems.length})`}</p>
                </div> */}

            </div>

        </>
    )
}

export default Cart
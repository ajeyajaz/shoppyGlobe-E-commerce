import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import PriceDetail from "../components/PriceDetail"
import Button from "../components/Button"
function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <>  
            <header className="border h-15 mb-5">

            </header>

            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-2 gap-y-7 md:grid-cols-2">
                <div className="flex  flex-col gap-2">
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                {/* price details */}
                <PriceDetail products={cartItems} className="border-l border-t border-gray-300" >
                    <Button variant='primary' className="p-2">place order</Button>
                </PriceDetail>

            </div>

        </>
    )
}

export default Cart
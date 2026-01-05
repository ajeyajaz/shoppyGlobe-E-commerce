import { useSelector, useDispatch } from "react-redux"
import { removeCart } from '../redux/features/CartSlice'
import CartItem from "../components/CartItem"
import PriceDetail from "../components/PriceDetail"
import Button from "../components/Button"
import { useNavigate, } from "react-router-dom"
import Header from "../components/Header"
import Message from "../components/Message"

// Cart-related actions are handled by Redux


function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // accepts productID
    const removeCartItem = (id) => {
        dispatch(removeCart({ id }))
    };

    if (!cartItems.length)
        return <Message
            title="Hey, it feels so light!"
            message="There is nothing in your bag."
            fallBackText="back to shop"
            url = '/'
        />


    return (
        <>
            <Header />

            <main className="max-w-5xl mx-auto mt-20">

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

                        <Button
                            variant='primary'
                            className="p-2"
                            onClick={() => navigate('/checkout')}
                        >
                            place order
                        </Button>
                    </PriceDetail>
                </div>
            </main>
        </>
    )
}

export default Cart
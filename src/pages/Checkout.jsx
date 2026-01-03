import AddressForm from "../components/AddressForm"
import OrderPlaced from "./OrderPlaced";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { clearCart } from "../redux/features/CartSlice";

function Checkout() {
    const [address, setAdress] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (data) => {
        setAdress(data);
        dispatch(clearCart());
    };

    return (
        <div className="max-w-5xl mx-auto">
            {!address && <AddressForm onSubmit={handleSubmit} />}

            {
                address && <OrderPlaced address={address} />
            }
        </div>
    )
}
export default Checkout
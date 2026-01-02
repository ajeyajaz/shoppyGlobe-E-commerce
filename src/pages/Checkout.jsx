import AddressForm from "../components/AddressForm"
import OrderPlaced from "./OrderPlaced";
import { useState } from "react";


function Checkout() {
    const [address, setAdress] = useState(null);

    const handleSubmit = (data) => {
        setAdress(data);
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
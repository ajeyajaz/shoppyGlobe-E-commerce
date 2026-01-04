import { useEffect} from "react"
import { useNavigate,} from "react-router-dom"

function OrderPlaced({ address }) {

    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [navigate]);



    return (
        <>
            <div className="rounded-xl bg-white p-5 shadow-md mt-10">
                {/* Header */}
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Delivery Address
                </h3>

                {/* Address */}
                <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="text-base font-medium text-gray-900">
                        {address.name}
                    </h4>

                    <p className="mt-1 text-sm text-gray-600">
                        {address.address}
                    </p>

                    <p className="text-sm text-gray-600">
                        {address.town} – {address.pinCode}
                    </p>

                    <p className="mt-2 text-sm font-medium text-gray-800">
                        📞 {address.mobileNo}
                    </p>
                </div>

                {/* Delivery Info */}
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                    🚚 Order will be delivered in <span className="font-semibold">3 days</span>
                </div>
            </div>
        </>
    )
}

export default OrderPlaced
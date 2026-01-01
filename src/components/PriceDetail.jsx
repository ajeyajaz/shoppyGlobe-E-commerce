function PriceDetail({products, children, className = '' }) {

   
    let totalMRP = 0;
    let discountOnMRP = 0;
    const platformFee = 20;

    for (let product of products) {
        totalMRP += product.price * product.quantity;
        discountOnMRP += (product.price * product.discountPercentage / 100) * product.quantity;
    }

    const totalPrice = (totalMRP - discountOnMRP) + platformFee

    return (
        <div className={`flex flex-col gap-2 p-3 leading-7 ${className}`}>

            <span className="text-gray-500 font-semibold mb-2">PRICE DETAILS ({products.length})</span>
            <span className="flex justify-between">Total MRP<span> ₹{totalMRP.toFixed(2)}</span></span>
            <span className="flex justify-between"> Discount on MRP<span> ₹{discountOnMRP.toFixed(2)}</span></span>
            <span className="flex justify-between">Platform fee<span> ₹{platformFee}</span></span>
            <hr className="text-gray-300 mb-2" />
            <span className="flex justify-between font-bold">Total Amount <span> ₹{totalPrice.toFixed(2)}</span></span>
            {children}
        </div>
    )
}

export default PriceDetail
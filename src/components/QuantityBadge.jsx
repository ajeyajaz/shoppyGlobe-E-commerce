
function QuantityBadge({ quantity, className = '' }) {
    return (
        <span
            className={`rounded-full p-px px-1 bg-red-600 text-xs font-bold text-white ${className}`}
        >
        {quantity}
        </span>
    )
}

export default QuantityBadge;
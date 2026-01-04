import { StarIcon } from "@heroicons/react/24/solid"

function RatingBadge({ children, className = '' }) {
    return (
        <span className={`inline-flex border gap-1 text-white ${className}`}>
            {children}
            <StarIcon className="w-5 h-5" />
        </span>
    )
}

export default RatingBadge
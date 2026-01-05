import { Link } from "react-router";


function Message({
    title = "Item not found",
    message = "We couldn’t find any items matching your search.",
    fallBackText = '',
    url = '/',
}) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">

            <h2 className="text-xl font-semibold text-gray-800">
                {title}
            </h2>

            <p className="text-gray-500 mt-2 max-w-sm">
                {message}
            </p>
            {fallBackText && (
                <Link
                    to={url}
                    className="mt-4 text-blue-600 hover:underline font-medium"
                >
                    {fallBackText}
                </Link>
            )}
        </div>
    );
}

export default Message;

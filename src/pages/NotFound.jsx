import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">

            <img
                src="https://illustrations.popsy.co/gray/crashed-error.svg"
                alt="Page not found"
                className="w-64 mx-auto mb-6"
            />

            <h1 className="text-2xl font-bold text-gray-800">
                Page not found
            </h1>

            <p className="text-gray-500 mt-2 text-center">
                Sorry, the page you’re looking for doesn’t exist or was moved.
            </p>

            <Link
                to="/"
                className="inline-block mt-6 px-6 py-3  text-black font-bold rounded-md hover:text-black/60"
            >
                Go back home
            </Link>
        </div>
    );
}

import Button from "../components/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import RatingBadge from "../components/RatingBadge";
import { useState } from "react";

function ProductDetail({ product, handleAddToCart}) {

    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent(current === 0 ? product.images.length - 1 : current - 1);

    const nextSlide = () =>
        setCurrent(current === product.images.length - 1 ? 0 : current + 1);

    const newPrice =
        product.price - (product.price * product.discountPercentage) / 100;



    return (
        <main className="bg-gray-100 min-h-screen pb-20 mt-20">
            <div className="max-w-7xl mx-auto bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* LEFT: Images */}
                <section className="flex gap-4">

                    {/* Desktop thumbnails */}
                    <div className="hidden md:flex flex-col gap-3">
                        {product.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                loading="lazy"
                                onClick={() => setCurrent(idx)}
                                className={`w-16 h-16 object-contain border cursor-pointer ${idx === current ? "border-blue-600" : "border-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Main image */}
                    <div className="relative flex-1 border border-gray-300">
                        {/* Mobile slider */}
                        <ChevronLeftIcon
                            className="w-7 h-7 absolute left-2 top-1/2 md:hidden"
                            onClick={prevSlide}
                        />
                        <ChevronRightIcon
                            className="w-7 h-7 absolute right-2 top-1/2 md:hidden"
                            onClick={nextSlide}
                        />

                        <img
                            src={product.images[current]}
                            className="w-full h-[320px] md:h-[420px] object-contain"
                            alt={product.title}
                        />
                    </div>
                </section>

                {/* RIGHT: Product Info */}
                <section>
                    <h1 className="text-lg font-semibold text-gray-800">
                        {product.title}
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        {product.brand} · {product.category}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-2">
                        <RatingBadge className="bg-green-700 px-2 rounded">
                            {product.rating}
                        </RatingBadge>
                        <span className="text-sm text-gray-500">
                            {product.reviews.length} reviews
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mt-4">
                        <span className="text-2xl font-bold">₹{newPrice.toFixed(2)}</span>
                        <span className="ml-2 text-gray-400 line-through">
                            ₹{product.price}
                        </span>
                        <span className="ml-2 text-green-600 font-semibold">
                            {product.discountPercentage}% off
                        </span>
                    </div>

                    <p className="text-sm text-green-700 mt-1">
                        {product.shippingInformation}
                    </p>

                    {/* Description */}
                    <div className="mt-6 border-t border-gray-300 pt-4">
                        <h3 className="font-semibold text-lg">Product Details</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            {product.description}
                        </p>

                        <div className="mt-3 text-sm">
                            <p className="font-semibold text-gray-700">Warranty</p>
                            <p>{product.warrantyInformation || "Not available"}</p>
                        </div>

                        <div className="mt-2 text-sm">
                            <p className="font-semibold text-gray-700">Return Policy</p>
                            <p>{product.returnPolicy || "Not available"}</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Reviews */}
            <section className="max-w-7xl mx-auto bg-white mt-4 p-4">
                <h3 className="font-bold text-lg">
                    Customer Reviews ({product.reviews.length})
                </h3>

                {product.reviews.map((review) => (
                    <div key={crypto.randomUUID()} className="mt-3">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">{review.reviewerName}</span>
                            <RatingBadge className="bg-green-700 px-2 rounded">
                                {review.rating}
                            </RatingBadge>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </section>

            {/* Sticky Bottom button */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t p-3 flex gap-3">
                <Button variant="secondary" className="flex-1 p-2" onClick={() => handleAddToCart(product)}>
                    ADD TO BAG
                </Button>
                <Button variant="primary" className="flex-1 p-2" onClick={() => {}}>
                    WISHLIST
                </Button>
            </div>
        </main>
    );
}

export default ProductDetail;

import shopyGlobe from '../assets/shoppyGlobe.svg'
import Button from './Button'
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'

function ProductItem({ product, className = '' }) {

    const originalPrice = product.price / (1 - product.discountPercentage / 100);

    return (
        <div
            className={`relative group ${className}`}
        >
            {/* thumbnail */}
            <div>
                <img
                    src={product.thumbnail}
                    alt=""
                    className='w-full h-50 object-cover'
                />
            </div>

            <div className='px-2  py-3 leading-7'>

                {/* title and cart icon */}
                <div className='flex justify-between gap-1'>

                    {/* brandName */}
                    <p className='font-bold truncate'>{product.brand}</p>

                    {/* mobile screen addCart and Whishlist */}
                    <div
                        className='flex items-center gap-2 lg:hidden'>
                        <button>
                            <ShoppingBagIcon
                                className='w-6 h-6'
                            />
                        </button>

                        <button>
                            <HeartIcon
                                className='w-6 h-6'
                            />
                        </button>
                    </div>
                </div>

                {/* details */}
                <div className='font-extralight text-sm space-x-2'>

                    {/* product-name */}
                    <p>{product.title}</p>

                    {/* current-price */}
                    <span className='font-bold'>{`Rs.${product.price}`}</span>

                    {/* original-price */}
                    <span className='line-through text-xs'>{originalPrice.toFixed(2)}</span>

                    {/* discount-percentage */}
                    <span
                        className='text-xs text-pink-500'
                    >
                        {`(${product.discountPercentage}%) OFF`}
                    </span>
                </div>

                {/* overlay for wide-screens */}
                <div
                    className='hidden absolute flex-col gap-1 justify-center items-center
                     bg-white z-50 bottom-0 top-45 left-0 right-0 
                     opacity-0 group-hover:opacity-100  transition-all duration-200 p-2 lg:flex '>

                    {/* addCart and whishlist */}
                    <Button
                        variant='primary'
                        className='py-2 w-full text-xs'
                    >
                        <ShoppingBagIcon
                            className='w-5 h-5'
                        />
                    </Button>

                    <Button
                        variant='secondary'
                        className='py-2 w-full text-xs content-center'
                    >
                        <HeartIcon
                            className='w-5 h-5'
                        />
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default ProductItem



import Button from './Button'
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router';

function ProductItem({ product, className = '', onClick = () => { } }) {

    const newPrice = product.price - (product.price * product.discountPercentage / 100);

    return (
        <div
            className={`relative group ${className}`}
        >
            {/* thumbnail */}
            <Link to={`/products/${product.id}`}>
                <img
                    src={product.thumbnail}
                    alt=""
                    className='w-full h-50 object-cover'
                    loading='lazy'
                />
            </Link>

            <div className='px-2  py-3 leading-7'>
                {/* title and cart */}
                <div className='flex justify-between gap-1'>
                    {/* brandName */}
                    <p className='font-bold truncate'>{product.brand}</p>
                    {/* mobile screen addCart and Whishlist */}
                    <div
                        className='flex items-center gap-2 lg:hidden'>
                        <button
                            onClick={() => onClick(product)}
                        >
                            <ShoppingBagIcon
                                className='w-6 h-6 click-effect cursor-pointer'
                            />
                        </button>
                        <button>
                            <HeartIcon
                                className='w-6 h-6 click-effect cursor-pointer'
                            />
                        </button>
                    </div>
                </div>
                {/* details */}
                <div className='font-extralight text-sm space-x-2'>
                    {/* name */}
                    <p>{product.title}</p>
                    {/* price after discount */}
                    <span className='font-bold'>{`Rs.${newPrice.toFixed(2)}`}</span>
                    {/* original-price */}
                    <span className='line-through text-xs'>{product.price}</span>
                    {/* discount-percentage */}
                    <span
                        className='text-xs text-pink-500'
                    >
                        {`(${product.discountPercentage}%) OFF`}
                    </span>
                </div>
                {/* overlay for wide-screens */}
                <div
                    className='hidden absolute flex-col justify-center items-center gap-1 p-2
                         bg-white  bottom-0 top-45 left-0 right-0 z-30
                         opacity-0 group-hover:opacity-100  transition-all duration-200 lg:flex '>
                    {/* addCart and whishlist */}
                    <Button
                        variant='primary'
                        className='py-2 w-full text-xs'
                        onClick={() => onClick(product)}
                    >
                        <ShoppingBagIcon
                            className='w-5 h-5'
                        />
                    </Button>
                    <Button
                        variant='secondary'
                        className='py-2 w-full text-xs'
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



import { useDispatch } from "react-redux"
import { updateCart } from '../redux/features/CartSlice'
import { XMarkIcon } from "@heroicons/react/24/outline";
import SelectButton from './SelectButton'


function CartItem({ item, onClick}) {

    const dispatch = useDispatch();

    const quantityOptions = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
    ];


    const oldTotal = item.price * item.quantity;
    const discount = (item.price * item.discountPercentage / 100) * item.quantity;
    const newTotal = oldTotal - discount;


    const handleOnselect = option => {
        dispatch(
            updateCart(
                {
                    id: item.id,
                    quantity: option.value
                }
            ));
    }

    return (
        <div className="flex  border gap-3 border-gray-300 bg-white p-1 relative">

            <button
                className="absolute top-0 right-0  mt-1 mr-0.5 cursor-pointer"
                onClick={()=> onClick(item.id)}
            >
                <XMarkIcon className="w-5 h-5 text-gray-900" />
            </button>

            <div className="w-30 h-32 shrink-0">
                <img src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            <div>
                {/* details */}
                <div className='font-extralight text-sm space-x-2'>

                    {/* brandName */}
                    <p className='font-bold truncate leading-7'>{item.brand}</p>

                    {/* name */}
                    <p>{item.title}</p>

                    {/* quantity */}
                    <SelectButton
                        options={quantityOptions}
                        placeholder='select quatity'
                        selectedOption={item.quantity}
                        onSelect={handleOnselect}
                    >
                        Qty:
                    </SelectButton>

                    {/* total after discount*/}
                    <span className='font-bold'>{`Rs.${newTotal.toFixed(2)}`}</span>

                    {/* total before discound */}
                    <span className='line-through text-xs'>{oldTotal.toFixed(2)}</span>


                    <span className='text-xs text-pink-500'>  {/* discount */}
                        {`(${item.discountPercentage}%) OFF`}
                    </span>

                </div>
            </div>

        </div>

    )
}

export default CartItem
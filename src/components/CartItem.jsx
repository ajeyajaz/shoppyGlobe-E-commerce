import { useSelector, useDispatch } from "react-redux"
import { updateCart } from '../redux/features/CartSlice'
import SelectButton from './SelectButton'


function CartItem({ item }) {

   
    const quatity = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
    ];

    const dispatch = useDispatch();

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
        <div className="flex items-start flex-wrap shadow">
            <img src={item.thumbnail} alt="" className="w-[40%] h-auto" />

            <div>
                {/* details */}
                <div className='font-extralight text-sm space-x-2'>

                    {/* brandName */}
                    <p className='font-bold truncate leading-7'>{item.brand}</p>

                    {/* name */}
                    <p>{item.title}</p>

                    {/* quantity */}
                    <SelectButton
                        options={quatity}
                        placeholder='select quatity'
                        selectedOption={item.quantity}
                        onSelect={handleOnselect}
                    >
                        Qty:
                    </SelectButton>

                    {/* price */}
                    <span className='font-bold'>{`Rs.${item.itemPrice}`}</span>

                    {/* original-price */}
                    <span className='line-through text-xs'>{item.originalPrice}</span>


                    <span className='text-xs text-pink-500'>  {/* discount */}
                        {`(${item.discountPercentage}%) OFF`}
                    </span>


                </div>
            </div>

        </div>

    )
}

export default CartItem
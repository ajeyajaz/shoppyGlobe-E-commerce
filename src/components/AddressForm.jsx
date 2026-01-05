import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(1, 'name required'),
    mobileNo: z.string().regex(/^\d{10}$/, "Enter valid 10-digit number"),
    pinCode: z.string().min(1, 'pincode required'),
    address: z.string().min(1, 'address required'),
    town: z.string().min(1, 'town name required'),
})

function AddressForm({ onSubmit }) {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

    return (

        <form onSubmit={handleSubmit(onSubmit)}
            className='p-2 space-y-5 mx-auto md:max-w-xl'
        >
            <div className='flex flex-col gap-2 p-2 border border-gray-300 rounded-md'>
                <h2 className='font-bold'>Contact Details</h2>
                <input
                    {...register('name')}
                    type="text"
                    placeholder="Name*"
                    className='outline-0 border border-gray-300 p-2'
                />
                {errors.name && <span className='text-red-400 text-sm'>{errors.name.message}</span>}

                <input
                    {...register('mobileNo')}
                    type="text"
                    placeholder="Mobile No*"
                    className='outline-0 border border-gray-300 p-2'
                />
                {errors.mobileNo && <span className='text-red-400 text-sm'>{errors.mobileNo.message}</span>}
            </div>

            <div className='flex flex-col gap-2 p-2 border border-gray-300 rounded-md'>
                <h2 className='font-bold'>Address</h2>
                <input
                    {...register('pinCode')}
                    type="text"
                    placeholder="PinCode*"
                    className='outline-0 border border-gray-300 p-2'
                />
                {errors.pinCode && <span className='text-red-400 text-sm'>{errors.pinCode.message}</span>}


                <input
                    {...register('address')}
                    type="text"
                    placeholder="House Number/Tower/Block*"
                    className='outline-0 border border-gray-300 p-2'
                />
                {errors.address && <span className='text-red-400 text-sm'>{errors.address.message}</span>}


                <input
                    {...register('town')}
                    type="text"
                    placeholder="townName*"
                    className='outline-0 border border-gray-300 p-2'
                />
                {errors.town && <span className='text-red-400 text-sm'>{errors.town.message}</span>}

            </div>
            <Button variant='primary' className='w-full p-2'>confirm</Button>
        </form >
    )
}

export default AddressForm
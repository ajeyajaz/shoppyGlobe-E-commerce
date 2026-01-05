import { useState } from "react"
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

// accepts options as objects of an array.

function SelectButton({ selectedOption, children, placeholder = 'select', onSelect = () => { }, options = [] }) {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null)

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
        onSelect(option);
    }

    return (
        <>
            <button
                className="flex items-center gap-0.5 font-bold cursor-pointer bg-gray-100 px-1 my-2"
                onClick={() => setOpen(true)}
            >
                {children} {selected ? selected.label : selectedOption}
                <ChevronDownIcon className="w-3 h-3" />
            </button>

            {open &&
                <div className="fixed inset-0 bg-black/20 z-40">
                    <div
                        className="absolute left-0 right-0 bottom-0 p-2 mx-auto bg-white min-h-30
                        rounded-sm sm:max-w-sm">
                        <p className="p-2">{placeholder}</p>
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-0 top-0 p-2"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                        <ul
                            className="flex justify-around items-center content-center flex-wrap h-full gap-3">
                            {
                                options.map(option => (
                                    <li
                                        key={option.value}
                                        className="border px-5 py-3 rounded-full"
                                        onClick={() => handleSelect(option)}
                                    >
                                        {option.label}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default SelectButton
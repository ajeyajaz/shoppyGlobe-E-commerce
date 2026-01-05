import { useState } from "react";
import { MagnifyingGlassIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function SearchBox({ value, placeholder = '', onChange = () => { } }) {
    const [open, setOpen] = useState(false);


    return (
        <div className="sm:flex-1">

            {/* >= 640px screens */}
            <div
                className="hidden p-1 border border-gray-400 rounded-sm sm:flex">
                <MagnifyingGlassIcon
                    className="w-6 h-6 text-gray-400" />
                <input
                    type="text"
                    className="flex-1 outline-0 pl-1"
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    value={value} />
            </div>

            {/* mobile devices */}

            {/* searchIcon */}
            {!open &&
                <button
                    className="opacity-effect sm:hidden"
                    onClick={() => {
                        setOpen(true);
                        onChange('');
                    }}>
                    <MagnifyingGlassIcon
                        className="w-6 h-6 text-gray-400" />
                </button>}


            {/* Mobile overlay */}
            {open &&
                <div
                    className="fixed inset-0 z-50 bg-white">
                    <div
                        className="absolute top-0 left-0 right-0 flex shadow-md px-1">
                        <button>
                            <ArrowLeftIcon
                                className="w-6 h-6 text-gray-500"
                                onClick={() => {
                                    setOpen(false);
                                    onChange('');
                                }}

                            />
                        </button>
                        <input
                            type="text"
                            className="flex-1 py-2 px-1 outline-0"
                            value={value}
                            onChange={ (e)=> onChange(e.target.value)}
                            onKeyDown={ (e) => {if(e.key === 'Enter') setOpen(false)}}
                        />
                        <button>
                            <MagnifyingGlassIcon
                                className="w-6 h-6 text-gray-500" />
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default SearchBox;

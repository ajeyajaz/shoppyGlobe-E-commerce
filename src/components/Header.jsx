import NavBar from "./NavBar"
import shopyGlobe from '../assets/shoppyglobe.svg'
import IconLabel from "./IconLabel"
import SearchBox from './SearchBox'
import { HeartIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from "react"


function Header() {

    const [input, setInput] = useState('');

    const links = [
        { id: 'ne1', label: 'beauty', path: '/beauty' },
        { id: 'ne2', label: 'fragrances', path: '/fragrances' },
        { id: 'ne3', label: 'furniture', path: '/furniture' },
        { id: 'ne4', label: 'groceries', path: '/groceries' },
    ]

    const handleSearchChange = (value) => {
        console.log(value);
        setInput(value);
    };

    return (
        <header className="flex items-center gap-8  h-20 px-2  shadow-md justify-around">

                {/* Brand logo */}
                <img
                    src={shopyGlobe}
                    className="min-w-min h-auto object-contain"
                />

                {/* navigation */}
                <NavBar
                    links={links}
                    className="hidden gap-8 mr-20 lg:flex"
                    itemClassName="uppercase text-sm font-semibold text-gray-700 hover:text-gray-500  transition-colors">
                </NavBar>
            

                {/* searchBox */}
                <SearchBox
                    placeholder='search products...'
                    onChange={handleSearchChange}
                    value={input}
                />

                {/* labelIcon */}
                <IconLabel
                    icon={UserIcon}
                    label='User'
                    className="icon-container opacity-effect ml-3"
                    iconClassName="icon-label__icon"
                    labelClassName="icon-label__text"
                />
                <IconLabel
                    icon={HeartIcon}
                    label='Wishlist'
                    className="icon-container opacity-effect"
                    iconClassName="icon-label__icon"
                    labelClassName="icon-label__text"
                />
                <IconLabel
                    icon={ShoppingBagIcon}
                    label='Bag'
                    className="icon-container opacity-effect"
                    iconClassName="icon-label__icon"
                    labelClassName="icon-label__text"
                />
        </header>
    )
}

export default Header
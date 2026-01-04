import NavBar from "./NavBar"
import shopyGlobe from '../assets/shoppyglobe.svg'
import IconLabel from "./IconLabel"
import SearchBox from './SearchBox'
import QuatityBadge from "./QuantityBadge"
import { HeartIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"


function Header() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const cartItemCount = useSelector(state => state.cart.cartItems.length);

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
        <header
            className="fixed top-0 left-0 right-0 z-50 flex items-center 
            justify-around h-20 gap-1 px-2 bg-white flex-wrap shadow-md sm:gap-6">

            {/* Brand logo */}
            <Link to='/'>
                <img
                    src={shopyGlobe}
                    className="min-w-min h-auto object-contain"
                />
            </Link>

            {/* navigation */}
            <NavBar
                links={links}
                className="hidden gap-8 lg:flex"
                itemClassName="uppercase text-sm font-semibold text-gray-700 hover:text-gray-500  transition-colors">
            </NavBar>


            {/* searchBox */}
            <SearchBox
                placeholder='search products...'
                onChange={handleSearchChange}
                value={input}
            />

            {/* User */}
            <IconLabel
                icon={UserIcon}
                label='User'
                className="icon-container opacity-effect ml-3"
                iconClassName="icon-label__icon"
                labelClassName="icon-label__text"
            />

            {/* Whishlist*/}
            <IconLabel
                icon={HeartIcon}
                label='Wishlist'
                className="icon-container opacity-effect"
                iconClassName="icon-label__icon"
                labelClassName="icon-label__text"
            />

            {/* Cart*/}
            <IconLabel
                icon={ShoppingBagIcon}
                onClick={() => navigate('/cart')}
                label='Bag'
                className="icon-container opacity-effect relative"
                iconClassName="icon-label__icon"
                labelClassName="icon-label__text"
            >
                {/* quantity count-badge */}
                <QuatityBadge
                    quantity={cartItemCount}
                    className="absolute -top-2" />
            </IconLabel>
        </header>
    )
}

export default Header
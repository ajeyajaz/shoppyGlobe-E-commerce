import NavBar from "./NavBar"
import shopyGlobe from '../assets/shoppyglobe.svg'
import IconLabel from "./IconLabel"
import SearchBox from './SearchBox'
import QuatityBadge from "./QuantityBadge"
import { HeartIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate, useLocation, useMatch, matchPath } from "react-router"
import { setSearchQuery } from '../redux/features/searchQuerySlice'

function Header() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isHome = pathname === '/';


    const cartItemCount = useSelector(state => state.cart.cartItems.length);
    const search = useSelector(state => state.search.query);
    const dispatch = useDispatch();

    const links = [
        { id: 'ne1', label: 'beauty', path: '/beauty' },
        { id: 'ne2', label: 'fragrances', path: '/fragrances' },
        { id: 'ne3', label: 'furniture', path: '/furniture' },
        { id: 'ne4', label: 'groceries', path: '/groceries' },
    ]

    const handleSearch = (query) => {
        dispatch(setSearchQuery(query));
    };

   const flex = isHome ? 'flex items-center justify-around' : 'flex items-center justify-between';

    return (
        <header
            className={`${flex} fixed top-0 left-0 right-0 z-50
            h-20 gap-1 px-2 bg-white flex-wrap shadow-md sm:gap-6 `}>

            {/* Brand logo */}
            <Link to='/'>
                <img
                    src={shopyGlobe}
                    className="min-w-min h-auto object-contain"
                />
            </Link>

            {/* navigation */}
            {
                isHome && (
                    <NavBar
                        links={links}
                        className="hidden gap-8 lg:flex"
                        itemClassName="uppercase text-sm font-semibold text-gray-700 hover:text-gray-500  transition-colors">
                    </NavBar>
                )
            }


            {/* searchBox */}
            {isHome && (
                <SearchBox
                    placeholder='search products...'
                    onChange={handleSearch}
                    value={search}
                />
            )}

            <div className="flex gap-4">
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
            </div>
        </header>
    )
}

export default Header
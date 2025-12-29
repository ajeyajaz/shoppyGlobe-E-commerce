import { Link } from "react-router-dom"

function NavBar({ links, className = '', itemClassName = '' }) {

    return (
        <nav className={className}>
            {links.map(link =>
                <Link
                    key={link.id}
                    to={link.path}
                    className={itemClassName}
                >
                    {link.label}</Link>)}

        </nav>
    )
}

export default NavBar
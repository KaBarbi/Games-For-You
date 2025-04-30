import React from "react"
import { NavLink, Link } from "react-router-dom"
import { FaShoppingCart, FaSearch } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"
import "./Menu.css"

const Menu = () => {
    return (
        <header className="menu">
            <div className="left-section">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo4.png" alt="Logo" />
                    </Link>
                </div>

                <nav className="nav-links">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                    <NavLink to="/playstation">PlayStation</NavLink>
                    <NavLink to="/xbox">Xbox</NavLink>
                    <NavLink to="/switch">Switch</NavLink>
                </nav>
            </div>

            <div className="right-section">
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>
                <Link to="/login">
                    <MdAccountCircle size={28} />
                </Link>
                <Link to="/cart">
                    <FaShoppingCart size={28} />
                </Link>
            </div>
        </header>
    )
}

export default Menu

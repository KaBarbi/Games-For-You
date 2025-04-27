import React from "react"
import "./Menu.css"
import { FaShoppingCart } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"

const Menu = () => {
    return (
        <header className="menu">
            <div className="logo">
                <a href="/">
                    <img src="/images/logo4.png" alt="Logo" />
                </a>
            </div>

            <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">PlayStation</a>
                <a href="#">Xbox</a>
                <a href="#">Switch</a>
            </nav>

            <div className="icons">
                <a href="#">
                    <MdAccountCircle size={28} />
                </a>
                <a href="#">
                    <FaShoppingCart size={28} />
                </a>
            </div>
        </header>
    )
}

export default Menu

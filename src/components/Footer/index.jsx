import React from "react"
import { NavLink } from "react-router-dom"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/playstation">PlayStation</NavLink>
                <NavLink to="/xbox">Xbox</NavLink>
                <NavLink to="/switch">Switch</NavLink>
            </div>
            <div className="footer-copy">
                <p>© 2025 Games4U, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

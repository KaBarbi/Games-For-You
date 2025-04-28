import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Playstation from "./pages/Playstation"
import Xbox from "./pages/Xbox"
import Switch from "./pages/Switch"

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Menu />

                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/playstation" element={<Playstation />} />
                        <Route path="/xbox" element={<Xbox />} />
                        <Route path="/switch" element={<Switch />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    )
}

export default App

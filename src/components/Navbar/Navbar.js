import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
        <nav className="nav">
            <div className="logo">
                <div className="main-text">Tutor Master</div>
                <div className="lower-text">Knowledge Master</div>
            </div>
            <ul className="nav-list">
                <li className="nav-item active">
                    <span className="nav-link">Home</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Trainings</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">About</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">Login</span>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
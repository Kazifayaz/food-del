import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase'; // Firebase Auth
import { signOut } from "firebase/auth"; // Logout function

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [user, setUser] = useState(auth.currentUser); // Track user state
    const navigate = useNavigate(); // For redirecting user

    // Logout function
    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure to log out?");
        if (confirmLogout) {
            await signOut(auth);
            alert("Logged out successfully!");
            setUser(null); // Remove user from state
            navigate("/"); // Redirect to home page
            setShowLogin(true); // Show login popup again
        }
    };

    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a>
                <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                    <div className="dot"></div>
                </div>
                
                {user ? (
                    <button onClick={handleLogout}>Log out</button>
                ) : (
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;

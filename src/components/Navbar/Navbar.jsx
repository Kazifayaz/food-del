import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase'; // Import auth from Firebase
import { signOut, onAuthStateChanged } from "firebase/auth"; // Import signOut & state listener
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [user, setUser] = useState(null); // Track logged-in user
    const navigate = useNavigate();

    // Track user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Cleanup function to prevent memory leaks
    }, []);

    // Logout function
    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            try {
                await signOut(auth);
                alert("Logged out successfully!");
                setUser(null);
                setShowLogin(true); // Show login popup again after logout
                navigate("/"); // Redirect to home page
            } catch (error) {
                console.error("Logout Error:", error);
                alert("Error logging out. Please try again.");
            }
        }
    };

    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="Logo" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="Cart" /></Link>
                    <div className="dot"></div>
                </div>
                
                {user ? (
                    <button onClick={handleLogout}>Log Out</button>
                ) : (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;

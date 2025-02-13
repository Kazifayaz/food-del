import React, { useState } from 'react';
import { auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import './LogInPopUp.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const LogInPopUp = ({ setUser }) => {
  const [currState, setCurrState] = useState('Login');
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  if (!showPopup) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (currState === "Sign Up") {
        // Create account
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        // Store in Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: formData.name,
          email: formData.email
        });

        alert("Sign Up Successful!");
      } else {
        // Login user
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        alert("Login Successful!");
      }

      setUser(auth.currentUser); // Update user state
      setShowPopup(false); // Close login popup
      navigate('/'); // Redirect to home page

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowPopup(false)} src={assets.cross_icon} alt="Close" className="close-icon" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input type="text" name="name" placeholder='Your Name' required onChange={handleChange} />}
          <input type="email" name="email" placeholder='Your Email' required onChange={handleChange} />
          <input type="password" name="password" placeholder='Password' required onChange={handleChange} />
        </div>

        {error && <p className="error">{error}</p>} 

        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  );
};

export default LogInPopUp;

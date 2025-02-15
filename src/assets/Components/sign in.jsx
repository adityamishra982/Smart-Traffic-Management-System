import React, { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Import the icons
import './SignInForm.css';

const SignInForm = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        setError('');
        alert(`Signed in as: ${email}`);
        onClose();
    };

    const handleGoogleSignIn = () => {
        alert('Signed in with Google');
        onClose();
    };

    const handleAppleSignIn = () => {
        alert('Signed in with Apple');
        onClose();
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="sign-in-form">
            <h2>Sign In</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "🙈" : "🙉"}
                        </button>
                    </div>
                </div>
                <div className="button-group">
                    <button type="submit" className="sign-in-button">Sign In</button>
                    <button type="button" className="close-button" onClick={onClose}>Close</button>
                </div>
            </form>
            <div className="social-sign-in">
                <button className="google-sign-in" onClick={handleGoogleSignIn}>
                    <FaGoogle /> Sign in with Google
                </button>
                <button className="apple-sign-in" onClick={handleAppleSignIn}>
                    <FaApple /> Sign in with Apple
                </button>
            </div>
        </div>
    );
};

export default SignInForm;

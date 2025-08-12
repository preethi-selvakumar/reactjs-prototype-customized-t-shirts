import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const SignInPage = () => {
    const navigate = useNavigate();
    const { signIn, isAuthenticated } = useAppContext();

    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({
        emailOrMobile: '',
        password: '',
    });

    // If already logged in, skip sign-in page
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const validate = () => {
        let isValid = true;
        let newErrors = { emailOrMobile: '', password: '' };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[6-9]\d{9}$/;

        if (!emailOrMobile) {
            newErrors.emailOrMobile = 'This field is required';
            isValid = false;
        } else if (!emailRegex.test(emailOrMobile) && !mobileRegex.test(emailOrMobile)) {
            newErrors.emailOrMobile = 'Please enter a valid email or mobile number';
            isValid = false;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        if (!password) {
            newErrors.password = 'This field is required';
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            newErrors.password =
                'Password must be at least 6 characters and include a letter, number, and special character';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSignIn = () => {
        if (validate()) {
            // Save email/mobile + login timestamp in context
            signIn({ emailOrMobile, loginTime: new Date().toISOString() });
            alert('Sign In Successful');
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSignIn();
        }
    };

    return (
        <div className="signin-container" onKeyDown={handleKeyPress}>
            <h2 className="signin-title">Sign In</h2>

            <label className="signin-label">Email / Mobile Number</label>
            <input
                type="text"
                className="signin-input"
                placeholder="Email / Mobile Number"
                value={emailOrMobile}
                onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            {errors.emailOrMobile && <p className="error-text">{errors.emailOrMobile}</p>}

            <label className="signin-label">Password</label>
            <div className="signin-password-wrapper">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="signin-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span
                    className="password-toggle-icon"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}

            <button className="signin-btn" onClick={handleSignIn}>
                Sign In
            </button>
            <button className="signin-otp-btn">Sign In With OTP</button>

            <div className="signin-footer">
                <a href="#" className="signin-link">Sign Up</a>
                <a href="#" className="signin-link">Forgot Password ?</a>
            </div>
        </div>
    );
};

export default SignInPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };
  const validateNumber = (number) => {
    const numberRegex = /^\+?[1-9]\d{1,14}$/;
    return numberRegex.test(number);
  }
  const validatePincode = (postalCode) => {
    const numberRegex = /^\+?[1-9]\d{1,14}$/;
    return numberRegex.test(number);
  }

  const handleSignUp = () => {
    if (!validateEmail(email)) {
      alert("Enter a valid email!");
      return;
    }
    if(!validateNumber(number)){
      alert("Enter a valid number!");
      return;
    }
    if(!validatePincode(postalCode)){
      alert("Enter a valid postalCode!");
      return;
    }
    if (!agreedToTerms) {
      alert("You must agree to the terms and conditions!");
      return;
    }
    else{
      console.log('Sign up successful');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Mobile Number:', number);
      console.log('Password:', password);
      console.log('Security Question:', securityQuestion);
      console.log('Security Answer:', securityAnswer);
      console.log('Address:', address);
      console.log('City:', city);
      console.log('State:', state);
      console.log('Postal Code:', postalCode);
      console.log('Country:', country);
      console.log('Referral Code:', referralCode);
      navigate('/');
    }
    if(!validatePincode())
    if (password === confirmPassword) {
      if (validatePassword(password)) {
        // axios.post('/api/signup', { /* user data */ })
        //   .then(response => {
        //     navigate('/');
        //   })
        //   .catch(error => {
        //     console.error('There was an error signing up!', error);
        //   });

      } else {
        alert(
          'Password must have one uppercase letter, one lowercase letter, one number, one symbol, and be at least 8 characters long.'
        );
      }
    } else {
      alert('Passwords do not match');
    }
    
  };

  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>Register</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required/>
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="tel" placeholder="Mobile Number" value={number} onChange={(e) => setNumber(e.target.value)} />
          <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <select value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)} >
            <option value="" disabled>Select a Security Question</option>
            <option value="firstPet">What was your first pet's name?</option>
            <option value="favoriteBook">What is your favorite book?</option>
            <option value="motherMaidenName">What is your mother's maiden name?</option>
            <option value="custom">Custom Question</option>
          </select>
          <input
            type="text"
            placeholder="Answer"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            
          />
          <input
            type="text"
            placeholder="State/Province/Region"
            value={state}
            onChange={(e) => setState(e.target.value)}
            
          />
          <input
            type="text"
            placeholder="Postal/Zip Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            
          />
          <input
            type="text"
            placeholder="Referral Code (optional)"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />
        </div>
        <div className="loginsignup-agree">
        <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={() => setAgreedToTerms(!agreedToTerms)}
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button onClick={handleSignUp}>SignUp</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login"><span>Login here</span></Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

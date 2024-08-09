import React, {useState} from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const validateNumber = (number) => {
    const numberRegex = /^\+?[1-9]\d{1,14}$/;
    return numberRegex.test(number);
  }
  const handleGenerateOTP = () => {
    if(!validateNumber(mobileNumber)){
      alert("Enter a valid number!");
      return;
    }
    console.log(`Generate OTP for mobile number: ${mobileNumber}`);
    navigate('/');
  };


  return (
    <div className='lognsignup'>
      <div className="logn-signup-container">
        <h1>Welcome Back!</h1>
        {/* <div className='para'> <p>Log in to unlock a world of digital experiences.</p></div> */}
        <div className="lognsignup-fields">
        <label>Mobile Number</label>
        <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
        </div>
        <button onClick={handleGenerateOTP}>Generate OTP</button>
        <p className="lognsignup-login">Don't have an account? <Link to='/signup'><span>SignUp here</span></Link></p>
        <p className="lognsignup-login"> <Link to='/admin'><span>Admin Login</span></Link></p>
      </div>
    </div>
  );
}

export default Login;
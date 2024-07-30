import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleGenerateOTP = () => {
    navigate('/admindashboard');
  };


  return (
    <div className='lognsignup'>
      <div className="logn-signup-container">
        <h1>Admin Login</h1>
        <div className="lognsignup-fields">
        <label>Email</label>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <label>Password</label>
        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button onClick={handleGenerateOTP}>Login</button>
      </div>
    </div>
  );
}

export default LoginAdmin;
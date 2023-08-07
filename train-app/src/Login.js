import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const authData = {
        companyName: 'Train Central',
        clientID: '"b46128a0-fbde-4c16-a4b1-6ae6ad718e27', // Replace with your client ID
        ownerName: 'Ram',
        ownerEmail: 'ugs205351_cse.dinesh@cbit.org.in',
        rollNo: '160120733150',
        clientSecret: 'XOyolORPayKBOdAN' // Replace with your client secret
      };

      

      const response = await axios.post(
        'http://20.244.56.144/train/auth/',
        authData
      );

      setToken(response.data.access_token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Get Token</button>
      {token && <pre>{token}</pre>}
    </div>
  );
};

export default Login;

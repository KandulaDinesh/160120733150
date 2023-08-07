import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [response, setResponse] = useState(null);

  const handleRegister = async () => {
    try {
      const registrationData = {
        companyName: 'Train Central',
        ownerName: 'Ram',
        rollNo: '160120733150',
        ownerEmail: 'ugs205351_cse.dinesh@cbit.org.in',
        accessCode: 'rdxwKw' // Replace with your access code
      };

      const response = await axios.post(
        'http://20.244.56.144/train/register',
        registrationData
      );

      setResponse(response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <button onClick={handleRegister}>Register Company</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default Register;

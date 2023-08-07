import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberManagement = () => {
  const [mergedNumbers, setMergedNumbers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          'http://20.244.56.144/numbers/primes',
          'http://abc.com/fibo', // Example invalid URL
          'http://20.244.56.144/numbers/odd'
        ];

        const responses = await Promise.all(
          urls.map(async (url) => {
            try {
              const response = await axios.get(url, { timeout: 500 });
              return response.data.numbers;
            } catch (error) {
              console.error(`Error fetching data from ${url}:`, error);
              return [];
            }
          })
        );

        const mergedUniqueNumbers = Array.from(
          new Set(responses.flatMap((numbers) => numbers))
        ).sort((a, b) => a - b);

        setMergedNumbers(mergedUniqueNumbers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Merged Unique Numbers</h1>
      <ul>
        {mergedNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberManagement;

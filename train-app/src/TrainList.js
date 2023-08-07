import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://20.244.56.144:80/train/trains', {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE20012MjkyNjQs ImNvbXBhbn10vw1lIjoiVHJhaW4gQ2Vud HJhbCIsImNsaWVudElEIjoiYjQ2MTE4ZjAtZmJkZ500YjE2LWEOYjEtNmFINmFkNzE8Yj131ne.v93QcxrZHWDTnTwm8-6t toTG14C65Grhn3r13DC8y8` // Replace with your token
          }
        });

        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Train Schedule</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            {train.name} - Price: {train.price}, Availability: {train.availability}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TrainList;

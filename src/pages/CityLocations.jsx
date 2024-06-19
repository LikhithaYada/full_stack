import React, { useEffect, useState } from 'react';
import '../styles/CityLocations.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CityLocations = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    const fetchMonuments = async () => {
      try {
        const response = await axios.get(`http://localhost:6001/fetch-monuments/${id}`);
        setMonuments(response.data);
      } catch (error) {
        console.error('Error fetching monuments:', error);
      }
    };

    fetchMonuments();
  }, [id]); // Added id to the dependency array

  return (
    <div className='CityLocations GenPagePadding'>
      <h3>Popular monuments in <span>{id}</span>...</h3>
      {monuments.length === 0 ? (
        <p>No monuments available</p>
      ) : (
        <div className='CityLocations__container'>
          {monuments.map(monument => (
            <div key={monument._id} className='city_location' onClick={() => navigate(`/location/${monument._id}`)}>
              <img src={monument.bannerImg} alt={monument.title} />
              <h4>{monument.title}</h4>
              <p>{monument.address}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityLocations;

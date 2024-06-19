import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; // Import Button component from react-bootstrap

// Import images
import Hyderabad from '../images/hyderabad.jpg';
import Mumbai from '../images/mumbai.jpg';
import Bengaluru from '../images/bengaluru.jpg';
import Chennai from '../images/chennai.jpg';
import Jaipur from '../images/jaipur.jpg';
import Kolkata from '../images/kolkata.jpg';
import Agra from '../images/agra.jpg';
import Tirupati from '../images/tirupati.jpg';

const Locations = ({ locations }) => {
  const navigate = useNavigate();

  return (
    <div className="search_cities">
      <div className="popular_cities_container">
        <h2 className="popular_cities_title">Related Locations</h2>

        {locations.length > 0 ? (
          <div className="popular_cities">
            {locations.map((location, index) => (
              <div key={index} className="popular_city" onClick={() => navigate(`/location/${location._id}`)}>
                {/* Display images dynamically based on location */}
                {location.city === 'Hyderabad' && <img src={Hyderabad} alt="Hyderabad" />}
                {location.city === 'Mumbai' && <img src={Mumbai} alt="Mumbai" />}
                {location.city === 'Bengaluru' && <img src={Bengaluru} alt="Bengaluru" />}
                {location.city === 'Chennai' && <img src={Chennai} alt="Chennai" />}
                {location.city === 'Jaipur' && <img src={Jaipur} alt="Jaipur" />}
                {location.city === 'Kolkata' && <img src={Kolkata} alt="Kolkata" />}
                {location.city === 'Agra' && <img src={Agra} alt="Agra" />}
                {location.city === 'Tirupati' && <img src={Tirupati} alt="Tirupati" />}
                <h4>{location.title}</h4>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>No locations available...</p>
        )}
      </div>
    </div>
  );
};

export default Locations;

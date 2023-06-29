import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import './../css/Card.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Card = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={require(`./../assets/restaurant-images/${image}`)} alt="Card" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        <p className="card-description">{description}</p>
        <Link to="/order" className="card-delivery">
            Order a delivery
            <FontAwesomeIcon icon={faTruck} className="card-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
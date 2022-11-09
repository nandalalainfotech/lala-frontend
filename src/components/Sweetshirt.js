import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sweetshirt(props) {
  const { sweetshirt } = props;
  return (
    <div key={sweetshirt._id} className="card">
      <Link to={`/sweetshirt/${sweetshirt._id}`}>
        <img className="medium" src={sweetshirt.image} alt={sweetshirt.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sweetshirt/${sweetshirt._id}`}>
          <h2>{sweetshirt.name}</h2>
        </Link>
        <Rating
          rating={sweetshirt.rating}
          numReviews={sweetshirt.numReviews}
        ></Rating>
        <div className="price">${sweetshirt.price}</div>
      </div>
    </div>
  );
}
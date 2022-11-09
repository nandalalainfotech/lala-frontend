import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sneakers(props) {
  const { sneakers } = props;
  return (
    <div key={sneakers._id} className="card">
      <Link to={`/sneakers/${sneakers._id}`}>
        <img className="medium" src={sneakers.image} alt={sneakers.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sneakers/${sneakers._id}`}>
          <h2>{sneakers.name}</h2>
        </Link>
        <Rating
          rating={sneakers.rating}
          numReviews={sneakers.numReviews}
        ></Rating>
        <div className="price">${sneakers.price}</div>
      </div>
    </div>
  );
}
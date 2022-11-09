import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Thermal(props) {
  const { thermal } = props;
  return (
    <div key={thermal._id} className="card">
      <Link to={`/thermal/${thermal._id}`}>
        <img className="medium" src={thermal.image} alt={thermal.name} />
      </Link>
      <div className="card-body">
        <Link to={`/thermal/${thermal._id}`}>
          <h2>{thermal.name}</h2>
        </Link>
        <Rating
          rating={thermal.rating}
          numReviews={thermal.numReviews}
        ></Rating>
        <div className="price">${thermal.price}</div>
      </div>
    </div>
  );
}
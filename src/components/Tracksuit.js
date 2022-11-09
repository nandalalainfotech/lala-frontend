import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Tracksuit(props) {
  const { tracksuit } = props;
  return (
    <div key={tracksuit._id} className="card">
      <Link to={`/tracksuit/${tracksuit._id}`}>
        <img className="medium" src={tracksuit.image} alt={tracksuit.name} />
      </Link>
      <div className="card-body">
        <Link to={`/tracksuit/${tracksuit._id}`}>
          <h2>{tracksuit.name}</h2>
        </Link>
        <Rating
          rating={tracksuit.rating}
          numReviews={tracksuit.numReviews}
        ></Rating>
        <div className="price">${tracksuit.price}</div>
      </div>
    </div>
  );
}
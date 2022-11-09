import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Trackpants(props) {
  const { trackpants } = props;
  return (
    <div key={trackpants._id} className="card">
      <Link to={`/trackpants/${trackpants._id}`}>
        <img className="medium" src={trackpants.image} alt={trackpants.name} />
      </Link>
      <div className="card-body">
        <Link to={`/trackpants/${trackpants._id}`}>
          <h2>{trackpants.name}</h2>
        </Link>
        <Rating
          rating={trackpants.rating}
          numReviews={trackpants.numReviews}
        ></Rating>
        <div className="price">${trackpants.price}</div>
      </div>
    </div>
  );
}
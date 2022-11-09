import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Rings(props) {
  const { rings } = props;
  return (
    <div key={rings._id} className="card">
      <Link to={`/rings/${rings._id}`}>
        <img className="medium" src={rings.image} alt={rings.name} />
      </Link>
      <div className="card-body">
        <Link to={`/rings/${rings._id}`}>
          <h2>{rings.name}</h2>
        </Link>
        <Rating
          rating={rings.rating}
          numReviews={rings.numReviews}
        ></Rating>
        <div className="price">${rings.price}</div>
      </div>
    </div>
  );
}
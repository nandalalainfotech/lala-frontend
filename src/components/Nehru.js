import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Nehru(props) {
  const { nehru } = props;
  return (
    <div key={nehru._id} className="card">
      <Link to={`/nehru/${nehru._id}`}>
        <img className="medium" src={nehru.image} alt={nehru.name} />
      </Link>
      <div className="card-body">
        <Link to={`/nehru/${nehru._id}`}>
          <h2>{nehru.name}</h2>
        </Link>
        <Rating
          rating={nehru.rating}
          numReviews={nehru.numReviews}
        ></Rating>
        <div className="price">₹{nehru.price}</div>
      </div>
    </div>
  );
}
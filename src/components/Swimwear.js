import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Swimwear(props) {
  const { swimwear } = props;
  return (
    <div key={swimwear._id} className="card">
      <Link to={`/swimwear/${swimwear._id}`}>
        <img className="medium" src={swimwear.image} alt={swimwear.name} />
      </Link>
      <div className="card-body">
        <Link to={`/swimwear/${swimwear._id}`}>
          <h2>{swimwear.name}</h2>
        </Link>
        <Rating
          rating={swimwear.rating}
          numReviews={swimwear.numReviews}
        ></Rating>
        <div className="price">${swimwear.price}</div>
      </div>
    </div>
  );
}
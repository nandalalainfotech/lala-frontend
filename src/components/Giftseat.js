import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Giftseat(props) {
  const { giftseat } = props;
  return (
    <div key={giftseat._id} className="card">
      <Link to={`/giftseat/${giftseat._id}`}>
        <img className="medium" src={giftseat.image} alt={giftseat.name} />
      </Link>
      <div className="card-body">
        <Link to={`/giftseat/${giftseat._id}`}>
          <h2>{giftseat.name}</h2>
        </Link>
        <Rating
          rating={giftseat.rating}
          numReviews={giftseat.numReviews}
        ></Rating>
        <div className="price">${giftseat.price}</div>
      </div>
    </div>
  );
}
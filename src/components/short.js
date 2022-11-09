import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Short(props) {
  const { short } = props;
  return (
    <div key={short._id} className="card">
      <Link to={`/short/${short._id}`}>
        <img className="medium" src={short.image} alt={short.name} />
      </Link>
      <div className="card-body">
        <Link to={`/short/${short._id}`}>
          <h2>{short.name}</h2>
        </Link>
        <Rating
          rating={short.rating}
          numReviews={short.numReviews}
        ></Rating>
        <div className="price">${short.price}</div>
      </div>
    </div>
  );
}
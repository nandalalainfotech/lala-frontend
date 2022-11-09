import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Plus(props) {
  const { plus } = props;
  return (
    <div key={plus._id} className="card">
      <Link to={`/plus/${plus._id}`}>
        <img className="medium" src={plus.image} alt={plus.name} />
      </Link>
      <div className="card-body">
        <Link to={`/plus/${plus._id}`}>
          <h2>{plus.name}</h2>
        </Link>
        <Rating
          rating={plus.rating}
          numReviews={plus.numReviews}
        ></Rating>
        <div className="price">${plus.price}</div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Personalcare(props) {
  const { personalcare } = props;
  return (
    <div key={personalcare._id} className="card">
      <Link to={`/personalcare/${personalcare._id}`}>
        <img className="medium" src={personalcare.image} alt={personalcare.name} />
      </Link>
      <div className="card-body">
        <Link to={`/personalcare/${personalcare._id}`}>
          <h2>{personalcare.name}</h2>
        </Link>
        <Rating
          rating={personalcare.rating}
          numReviews={personalcare.numReviews}
        ></Rating>
        <div className="price">${personalcare.price}</div>
      </div>
    </div>
  );
}
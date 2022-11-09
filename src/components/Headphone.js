import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Headphone(props) {
  const { headphone } = props;
  return (
    <div key={headphone._id} className="card">
      <Link to={`/headphone/${headphone._id}`}>
        <img className="medium" src={headphone.image} alt={headphone.name} />
      </Link>
      <div className="card-body">
        <Link to={`/headphone/${headphone._id}`}>
          <h2>{headphone.name}</h2>
        </Link>
        <Rating
          rating={headphone.rating}
          numReviews={headphone.numReviews}
        ></Rating>
        <div className="price">${headphone.price}</div>
      </div>
    </div>
  );
}
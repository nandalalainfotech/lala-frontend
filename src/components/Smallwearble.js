import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Smallwearble(props) {
  const { smallwearble } = props;
  return (
    <div key={smallwearble._id} className="card">
      <Link to={`/smallwearble/${smallwearble._id}`}>
        <img className="medium" src={smallwearble.image} alt={smallwearble.name} />
      </Link>
      <div className="card-body">
        <Link to={`/smallwearble/${smallwearble._id}`}>
          <h2>{smallwearble.name}</h2>
        </Link>
        <Rating
          rating={smallwearble.rating}
          numReviews={smallwearble.numReviews}
        ></Rating>
        <div className="price">${smallwearble.price}</div>
      </div>
    </div>
  );
}
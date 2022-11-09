import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Bottomwear(props) {
  const { bottomwear } = props;
  return (
    <div key={bottomwear._id} className="card">
      <Link to={`/bottomwear/${bottomwear._id}`}>
        <img className="medium" src={bottomwear.image} alt={bottomwear.name} />
      </Link>
      <div className="card-body">
        <Link to={`/bottomwear/${bottomwear._id}`}>
          <h2>{bottomwear.name}</h2>
        </Link>
        <Rating
          rating={bottomwear.rating}
          numReviews={bottomwear.numReviews}
        ></Rating>
        <div className="price">${bottomwear.price}</div>
      </div>
    </div>
  );
}
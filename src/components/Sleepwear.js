import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sleepwear(props) {
  const { sleepwear } = props;
  return (
    <div key={sleepwear._id} className="card">
      <Link to={`/sleepwear/${sleepwear._id}`}>
        <img className="medium" src={sleepwear.image} alt={sleepwear.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sleepwear/${sleepwear._id}`}>
          <h2>{sleepwear.name}</h2>
        </Link>
        <Rating
          rating={sleepwear.rating}
          numReviews={sleepwear.numReviews}
        ></Rating>
        <div className="price">${sleepwear.price}</div>
      </div>
    </div>
  );
}
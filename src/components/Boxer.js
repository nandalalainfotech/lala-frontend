import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Boxer(props) {
  const { boxer } = props;
  return (
    <div key={boxer._id} className="card">
      <Link to={`/boxer/${boxer._id}`}>
        <img className="medium" src={boxer.image} alt={boxer.name} />
      </Link>
      <div className="card-body">
        <Link to={`/boxer/${boxer._id}`}>
          <h2>{boxer.name}</h2>
        </Link>
        <Rating
          rating={boxer.rating}
          numReviews={boxer.numReviews}
        ></Rating>
        <div className="price">${boxer.price}</div>
      </div>
    </div>
  );
}
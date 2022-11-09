import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Muffalears(props) {
  const { muffalears } = props;
  return (
    <div key={muffalears._id} className="card">
      <Link to={`/muffalears/${muffalears._id}`}>
        <img className="medium" src={muffalears.image} alt={muffalears.name} />
      </Link>
      <div className="card-body">
        <Link to={`/muffalears/${muffalears._id}`}>
          <h2>{muffalears.name}</h2>
        </Link>
        <Rating
          rating={muffalears.rating}
          numReviews={muffalears.numReviews}
        ></Rating>
        <div className="price">${muffalears.price}</div>
      </div>
    </div>
  );
}
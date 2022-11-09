import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Brief(props) {
  const { brief } = props;
  return (
    <div key={brief._id} className="card">
      <Link to={`/brief/${brief._id}`}>
        <img className="medium" src={brief.image} alt={brief.name} />
      </Link>
      <div className="card-body">
        <Link to={`/brief/${brief._id}`}>
          <h2>{brief.name}</h2>
        </Link>
        <Rating
          rating={brief.rating}
          numReviews={brief.numReviews}
        ></Rating>
        <div className="price">${brief.price}</div>
      </div>
    </div>
  );
}
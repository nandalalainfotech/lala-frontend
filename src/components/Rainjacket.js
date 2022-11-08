import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Rainjacket(props) {
  const { rainjacket } = props;
  return (
    <div key={rainjacket._id} className="card">
      <Link to={`/rainjacket/${rainjacket._id}`}>
        <img className="medium" src={rainjacket.image} alt={rainjacket.name} />
      </Link>
      <div className="card-body">
        <Link to={`/rainjacket/${rainjacket._id}`}>
          <h2>{rainjacket.name}</h2>
        </Link>
        <Rating
          rating={rainjacket.rating}
          numReviews={rainjacket.numReviews}
        ></Rating>
        <div className="price">${rainjacket.price}</div>
      </div>
    </div>
  );
}
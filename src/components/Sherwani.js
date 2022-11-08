import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sherwani(props) {
  const { sherwani } = props;
  return (
    <div key={sherwani._id} className="card">
      <Link to={`/sherwani/${sherwani._id}`}>
        <img className="medium" src={sherwani.image} alt={sherwani.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sherwani/${sherwani._id}`}>
          <h2>{sherwani.name}</h2>
        </Link>
        <Rating
          rating={sherwani.rating}
          numReviews={sherwani.numReviews}
        ></Rating>
        <div className="price">₹{sherwani.price}</div>
      </div>
    </div>
  );
}
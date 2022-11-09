import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sunglasses(props) {
  const { sunglasses } = props;
  return (
    <div key={sunglasses._id} className="card">
      <Link to={`/sunglasses/${sunglasses._id}`}>
        <img className="medium" src={sunglasses.image} alt={sunglasses.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sunglasses/${sunglasses._id}`}>
          <h2>{sunglasses.name}</h2>
        </Link>
        <Rating
          rating={sunglasses.rating}
          numReviews={sunglasses.numReviews}
        ></Rating>
        <div className="price">${sunglasses.price}</div>
      </div>
    </div>
  );
}
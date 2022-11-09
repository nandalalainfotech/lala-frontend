import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Footwear(props) {
  const { footwear } = props;
  return (
    <div key={footwear._id} className="card">
      <Link to={`/footwear/${footwear._id}`}>
        <img className="medium" src={footwear.image} alt={footwear.name} />
      </Link>
      <div className="card-body">
        <Link to={`/footwear/${footwear._id}`}>
          <h2>{footwear.name}</h2>
        </Link>
        <Rating
          rating={footwear.rating}
          numReviews={footwear.numReviews}
        ></Rating>
        <div className="price">${footwear.price}</div>
      </div>
    </div>
  );
}
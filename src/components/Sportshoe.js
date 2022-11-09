import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sportshoe(props) {
  const { SportShoe } = props;
  return (
    <div key={SportShoe._id} className="card">
      <Link to={`/SportShoe/${SportShoe._id}`}>
        <img className="medium" src={SportShoe.image} alt={SportShoe.name} />
      </Link>
      <div className="card-body">
        <Link to={`/SportShoe/${SportShoe._id}`}>
          <h2>{SportShoe.name}</h2>
        </Link>
        <Rating
          rating={SportShoe.rating}
          numReviews={SportShoe.numReviews}
        ></Rating>
        <div className="price">${SportShoe.price}</div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sandalshoe(props) {
  const { sandalshoe } = props;
  return (
    <div key={sandalshoe._id} className="card">
      <Link to={`/sandalshoe/${sandalshoe._id}`}>
        <img className="medium" src={sandalshoe.image} alt={sandalshoe.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sandalshoe/${sandalshoe._id}`}>
          <h2>{sandalshoe.name}</h2>
        </Link>
        <Rating
          rating={sandalshoe.rating}
          numReviews={sandalshoe.numReviews}
        ></Rating>
        <div className="price">${sandalshoe.price}</div>
      </div>
    </div>
  );
}
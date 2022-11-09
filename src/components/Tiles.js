import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Tiles(props) {
  const { tiles } = props;
  return (
    <div key={tiles._id} className="card">
      <Link to={`/tiles/${tiles._id}`}>
        <img className="medium" src={tiles.image} alt={tiles.name} />
      </Link>
      <div className="card-body">
        <Link to={`/tiles/${tiles._id}`}>
          <h2>{tiles.name}</h2>
        </Link>
        <Rating
          rating={tiles.rating}
          numReviews={tiles.numReviews}
        ></Rating>
        <div className="price">${tiles.price}</div>
      </div>
    </div>
  );
}
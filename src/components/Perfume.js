import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Perfume(props) {
  const { perfume } = props;
  return (
    <div key={perfume._id} className="card">
      <Link to={`/perfume/${perfume._id}`}>
        <img className="medium" src={perfume.image} alt={perfume.name} />
      </Link>
      <div className="card-body">
        <Link to={`/perfume/${perfume._id}`}>
          <h2>{perfume.name}</h2>
        </Link>
        <Rating
          rating={perfume.rating}
          numReviews={perfume.numReviews}
        ></Rating>
        <div className="price">${perfume.price}</div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Saree(props) {
  const { Saree } = props;
  return (
    <div key={Saree._id} className="card">
      <Link to={`/Saree/${Saree._id}`}>
        <img className="medium" src={Saree.image} alt={Saree.name} />
      </Link>
      <div className="card-body">
        <Link to={`/Saree/${Saree._id}`}>
          <h2>{Saree.name}</h2>
        </Link>
        <Rating
          rating={Saree.rating}
          numReviews={Saree.numReviews}
        ></Rating>
        <div className="price">${Saree.price}</div>
      </div>
    </div>
  );
}
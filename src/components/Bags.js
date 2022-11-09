import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Bags(props) {
  const { bags } = props;
  return (
    <div key={bags._id} className="card">
      <Link to={`/bags/${bags._id}`}>
        <img className="medium" src={bags.image} alt={bags.name} />
      </Link>
      <div className="card-body">
        <Link to={`/bags/${bags._id}`}>
          <h2>{bags.name}</h2>
        </Link>
        <Rating
          rating={bags.rating}
          numReviews={bags.numReviews}
        ></Rating>
        <div className="price">${bags.price}</div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Helmet(props) {
  const { helmet } = props;
  return (
    <div key={helmet._id} className="card">
      <Link to={`/helmet/${helmet._id}`}>
        <img className="medium" src={helmet.image} alt={helmet.name} />
      </Link>
      <div className="card-body">
        <Link to={`/helmet/${helmet._id}`}>
          <h2>{helmet.name}</h2>
        </Link>
        <Rating
          rating={helmet.rating}
          numReviews={helmet.numReviews}
        ></Rating>
        <div className="price">${helmet.price}</div>
      </div>
    </div>
  );
}
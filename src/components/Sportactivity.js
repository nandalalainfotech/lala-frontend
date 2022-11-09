import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sportactivity(props) {
  const { sportactivity } = props;
  return (
    <div key={sportactivity._id} className="card">
      <Link to={`/sportactivity/${sportactivity._id}`}>
        <img className="medium" src={sportactivity.image} alt={sportactivity.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sportactivity/${sportactivity._id}`}>
          <h2>{sportactivity.name}</h2>
        </Link>
        <Rating
          rating={sportactivity.rating}
          numReviews={sportactivity.numReviews}
        ></Rating>
        <div className="price">${sportactivity.price}</div>
      </div>
    </div>
  );
}
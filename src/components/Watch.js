import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Watch(props) {
  const { watch } = props;
  return (
    <div key={watch._id} className="card">
      <Link to={`/watch/${watch._id}`}>
        <img className="medium" src={watch.image} alt={watch.name} />
      </Link>
      <div className="card-body">
        <Link to={`/watch/${watch._id}`}>
          <h2>{watch.name}</h2>
        </Link>
        <Rating
          rating={watch.rating}
          numReviews={watch.numReviews}
        ></Rating>
        <div className="price">${watch.price}</div>
      </div>
    </div>
  );
}
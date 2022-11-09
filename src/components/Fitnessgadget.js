import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Fitnessgadget(props) {
  const { fitnessgadget } = props;
  return (
    <div key={fitnessgadget._id} className="card">
      <Link to={`/fitnessgadget/${fitnessgadget._id}`}>
        <img className="medium" src={fitnessgadget.image} alt={fitnessgadget.name} />
      </Link>
      <div className="card-body">
        <Link to={`/fitnessgadget/${fitnessgadget._id}`}>
          <h2>{fitnessgadget.name}</h2>
        </Link>
        <Rating
          rating={fitnessgadget.rating}
          numReviews={fitnessgadget.numReviews}
        ></Rating>
        <div className="price">${fitnessgadget.price}</div>
      </div>
    </div>
  );
}
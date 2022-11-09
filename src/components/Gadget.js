import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Gadget(props) {
  const { gadget } = props;
  return (
    <div key={gadget._id} className="card">
      <Link to={`/gadget/${gadget._id}`}>
        <img className="medium" src={gadget.image} alt={gadget.name} />
      </Link>
      <div className="card-body">
        <Link to={`/gadget/${gadget._id}`}>
          <h2>{gadget.name}</h2>
        </Link>
        <Rating
          rating={gadget.rating}
          numReviews={gadget.numReviews}
        ></Rating>
        <div className="price">${gadget.price}</div>
      </div>
    </div>
  );
}
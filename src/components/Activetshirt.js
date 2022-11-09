import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Activetshirt(props) {
  const { activetshirt } = props;
  return (
    <div key={activetshirt._id} className="card">
      <Link to={`/activetshirt/${activetshirt._id}`}>
        <img className="medium" src={activetshirt.image} alt={activetshirt.name} />
      </Link>
      <div className="card-body">
        <Link to={`/activetshirt/${activetshirt._id}`}>
          <h2>{activetshirt.name}</h2>
        </Link>
        <Rating
          rating={activetshirt.rating}
          numReviews={activetshirt.numReviews}
        ></Rating>
        <div className="price">${activetshirt.price}</div>
      </div>
    </div>
  );
}
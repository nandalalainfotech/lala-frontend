import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Tshirt(props) {
  const { tshirt } = props;
  return (
    <div key={tshirt._id} className="card">
      <Link to={`/tshirt/${tshirt._id}`}>
        <img className="medium" src={tshirt.image} alt={tshirt.name} />
      </Link>
      <div className="card-body">
        <Link to={`/tshirt/${tshirt._id}`}>
          <h2>{tshirt.name}</h2>
        </Link>
        <Rating
          rating={tshirt.rating}
          numReviews={tshirt.numReviews}
        ></Rating>
        <div className="price">${tshirt.price}</div>
      </div>
    </div>
  );
}
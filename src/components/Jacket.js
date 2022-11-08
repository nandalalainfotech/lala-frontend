import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Jacket(props) {
  const { jacket } = props;
  return (
    <div key={jacket._id} className="card">
      <Link to={`/jacket/${jacket._id}`}>
        <img className="medium" src={jacket.image} alt={jacket.name} />
      </Link>
      <div className="card-body">
        <Link to={`/jacket/${jacket._id}`}>
          <h2>{jacket.name}</h2>
        </Link>
        <Rating
          rating={jacket.rating}
          numReviews={jacket.numReviews}
        ></Rating>
        <div className="price">${jacket.price}</div>
      </div>
    </div>
  );
}
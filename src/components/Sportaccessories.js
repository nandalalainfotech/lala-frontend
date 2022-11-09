import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Sportaccessories(props) {
  const { sportaccessories } = props;
  return (
    <div key={sportaccessories._id} className="card">
      <Link to={`/sportaccessories/${sportaccessories._id}`}>
        <img className="medium" src={sportaccessories.image} alt={sportaccessories.name} />
      </Link>
      <div className="card-body">
        <Link to={`/sportaccessories/${sportaccessories._id}`}>
          <h2>{sportaccessories.name}</h2>
        </Link>
        <Rating
          rating={sportaccessories.rating}
          numReviews={sportaccessories.numReviews}
        ></Rating>
        <div className="price">${sportaccessories.price}</div>
      </div>
    </div>
  );
}
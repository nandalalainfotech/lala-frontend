import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Deodarant(props) {
  const { deodarant } = props;
  return (
    <div key={deodarant._id} className="card">
      <Link to={`/deodarant/${deodarant._id}`}>
        <img className="medium" src={deodarant.image} alt={deodarant.name} />
      </Link>
      <div className="card-body">
        <Link to={`/deodarant/${deodarant._id}`}>
          <h2>{deodarant.name}</h2>
        </Link>
        <Rating
          rating={deodarant.rating}
          numReviews={deodarant.numReviews}
        ></Rating>
        <div className="price">${deodarant.price}</div>
      </div>
    </div>
  );
}
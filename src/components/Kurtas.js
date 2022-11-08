import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Kurtas(props) {
  const { kurtas } = props;
  return (
    <div key={kurtas._id} className="card">
      <Link to={`/kurtas/${kurtas._id}`}>
        <img className="medium" src={kurtas.image} alt={kurtas.name} />
      </Link>
      <div className="card-body">
        <Link to={`/kurtas/${kurtas._id}`}>
          <h2>{kurtas.name}</h2>
        </Link>
        <Rating
          rating={kurtas.rating}
          numReviews={kurtas.numReviews}
        ></Rating>
        <div className="price">₹{kurtas.price}</div>
      </div>
    </div>
  );
}
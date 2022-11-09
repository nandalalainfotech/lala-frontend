import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Flipflops(props) {
  const { flipflops } = props;
  return (
    <div key={flipflops._id} className="card">
      <Link to={`/flipflops/${flipflops._id}`}>
        <img className="medium" src={flipflops.image} alt={flipflops.name} />
      </Link>
      <div className="card-body">
        <Link to={`/flipflops/${flipflops._id}`}>
          <h2>{flipflops.name}</h2>
        </Link>
        <Rating
          rating={flipflops.rating}
          numReviews={flipflops.numReviews}
        ></Rating>
        <div className="price">${flipflops.price}</div>
      </div>
    </div>
  );
}
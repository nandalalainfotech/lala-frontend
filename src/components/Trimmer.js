import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Trimmer(props) {
  const { trimmer } = props;
  return (
    <div key={trimmer._id} className="card">
      <Link to={`/trimmer/${trimmer._id}`}>
        <img className="medium" src={trimmer.image} alt={trimmer.name} />
      </Link>
      <div className="card-body">
        <Link to={`/trimmer/${trimmer._id}`}>
          <h2>{trimmer.name}</h2>
        </Link>
        <Rating
          rating={trimmer.rating}
          numReviews={trimmer.numReviews}
        ></Rating>
        <div className="price">${trimmer.price}</div>
      </div>
    </div>
  );
}
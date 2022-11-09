import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Phonecases(props) {
  const { phonecases } = props;
  return (
    <div key={phonecases._id} className="card">
      <Link to={`/phonecases/${phonecases._id}`}>
        <img className="medium" src={phonecases.image} alt={phonecases.name} />
      </Link>
      <div className="card-body">
        <Link to={`/phonecases/${phonecases._id}`}>
          <h2>{phonecases.name}</h2>
        </Link>
        <Rating
          rating={phonecases.rating}
          numReviews={phonecases.numReviews}
        ></Rating>
        <div className="price">${phonecases.price}</div>
      </div>
    </div>
  );
}
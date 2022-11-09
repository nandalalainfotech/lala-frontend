import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Innerwear(props) {
  const { innerwear } = props;
  return (
    <div key={innerwear._id} className="card">
      <Link to={`/innerwear/${innerwear._id}`}>
        <img className="medium" src={innerwear.image} alt={innerwear.name} />
      </Link>
      <div className="card-body">
        <Link to={`/innerwear/${innerwear._id}`}>
          <h2>{innerwear.name}</h2>
        </Link>
        <Rating
          rating={innerwear.rating}
          numReviews={innerwear.numReviews}
        ></Rating>
        <div className="price">${innerwear.price}</div>
      </div>
    </div>
  );
}
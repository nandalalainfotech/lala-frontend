import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Dhotis(props) {
  const { dhotis } = props;
  return (
    <div key={dhotis._id} className="card">
      <Link to={`/dhotis/${dhotis._id}`}>
        <img className="medium" src={dhotis.image} alt={dhotis.name} />
      </Link>
      <div className="card-body">
        <Link to={`/dhotis/${dhotis._id}`}>
          <h2>{dhotis.name}</h2>
        </Link>
        <Rating
          rating={dhotis.rating}
          numReviews={dhotis.numReviews}
        ></Rating>
        <div className="price">₹{dhotis.price}</div>
      </div>
    </div>
  );
}
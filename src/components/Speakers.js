import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function speakerss(props) {
  const { speakers } = props;
  return (
    <div key={speakers._id} className="card">
      <Link to={`/speakers/${speakers._id}`}>
        <img className="medium" src={speakers.image} alt={speakers.name} />
      </Link>
      <div className="card-body">
        <Link to={`/speakers/${speakers._id}`}>
          <h2>{speakers.name}</h2>
        </Link>
        <Rating
          rating={speakers.rating}
          numReviews={speakers.numReviews}
        ></Rating>
        <div className="price">${speakers.price}</div>
      </div>
    </div>
  );
}
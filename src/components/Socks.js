import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Socks(props) {
  const { socks } = props;
  return (
    <div key={socks._id} className="card">
      <Link to={`/socks/${socks._id}`}>
        <img className="medium" src={socks.image} alt={socks.name} />
      </Link>
      <div className="card-body">
        <Link to={`/socks/${socks._id}`}>
          <h2>{socks.name}</h2>
        </Link>
        <Rating
          rating={socks.rating}
          numReviews={socks.numReviews}
        ></Rating>
        <div className="price">${socks.price}</div>
      </div>
    </div>
  );
}
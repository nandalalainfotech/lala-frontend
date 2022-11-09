import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Trackpant(props) {
  const { trackpant } = props;
  return (
    <div key={trackpant._id} className="card">
      <Link to={`/trackpant/${trackpant._id}`}>
        <img className="medium" src={trackpant.image} alt={trackpant.name} />
      </Link>
      <div className="card-body">
        <Link to={`/trackpant/${trackpant._id}`}>
          <h2>{trackpant.name}</h2>
        </Link>
        <Rating
          rating={trackpant.rating}
          numReviews={trackpant.numReviews}
        ></Rating>
        <div className="price">${trackpant.price}</div>
      </div>
    </div>
  );
}
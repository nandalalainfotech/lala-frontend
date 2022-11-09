import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Wallet(props) {
  const { wallet } = props;
  return (
    <div key={wallet._id} className="card">
      <Link to={`/wallet/${wallet._id}`}>
        <img className="medium" src={wallet.image} alt={wallet.name} />
      </Link>
      <div className="card-body">
        <Link to={`/wallet/${wallet._id}`}>
          <h2>{wallet.name}</h2>
        </Link>
        <Rating
          rating={wallet.rating}
          numReviews={wallet.numReviews}
        ></Rating>
        <div className="price">${wallet.price}</div>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


export default function Formaltrouser(props) {
  const { formaltrouser } = props;
  return (
    <div key={formaltrouser._id} className="card">
      <Link to={`/formaltrouser/${formaltrouser._id}`}>
        <img className="medium" src={formaltrouser.image} alt={formaltrouser.name} />
      </Link>
      <div className="card-body">
        <Link to={`/formaltrouser/${formaltrouser._id}`}>
          <h2>{formaltrouser.name}</h2>
        </Link>
        <Rating
          rating={formaltrouser.rating}
          numReviews={formaltrouser.numReviews}
        ></Rating>
        <div className="price">${formaltrouser.price}</div>
      </div>
    </div>
  );
}
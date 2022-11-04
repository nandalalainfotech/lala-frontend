import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSuits } from '../actions/suitAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Suit from '../components/Suit';
// import Product from '../components/Product';




export default function SuitScreens() {
  const dispatch = useDispatch();
  const suitList = useSelector((state) => state.suitList);
  console.log("called------->suitList",suitList);
  const { loading, error, suits } = suitList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listSuits({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>suit collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {suits.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {suits.map((suit) => (
              <Suit key={suit._id} suit={suit}></Suit>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Formalshirt from '../components/Formalshirt';
import { listFormalshirts } from '../actions/formalshirtAction';
// import Product from '../components/Product';




export default function FormalshirtScreens() {
  const dispatch = useDispatch();
  const formalshirtList = useSelector((state) => state.formalshirtList);
  console.log("called------->formalshirtList",formalshirtList);
  const { loading, error, formalshirts } = formalshirtList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listFormalshirts({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>Formal shirt collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {formalshirts.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {formalshirts.map((formalshirt) => (
              <Formalshirt key={formalshirt._id} formalshirt={formalshirt}></Formalshirt>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

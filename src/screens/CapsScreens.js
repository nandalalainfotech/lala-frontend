import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCapss } from '../actions/capsAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Caps from '../components/Caps';
// import Product from '../components/Product';




export default function CapsScreens() {
  const dispatch = useDispatch();
  const capsList = useSelector((state) => state.capsList);
  console.log("called------->capsList",capsList);
  const { loading, error, capss } = capsList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listCapss({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>caps collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {capss.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {capss.map((caps) => (
              <Caps key={caps._id} caps={caps}></Caps>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

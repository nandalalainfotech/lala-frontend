import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBlazers } from '../actions/blazerAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Blazer from '../components/Blazer';
// import Product from '../components/Product';




export default function BlazerScreens() {
  const dispatch = useDispatch();
  const blazerList = useSelector((state) => state.blazerList);
  console.log("called------->blazerList",blazerList);
  const { loading, error, blazers } = blazerList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listBlazers({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>blazer collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {blazers.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {blazers.map((blazer) => (
              <Blazer key={blazer._id} blazer={blazer}></Blazer>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

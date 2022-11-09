import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listGiftseats } from '../actions/giftseatAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Giftseat from '../components/Giftseat';
// import Product from '../components/Product';




export default function GiftseatScreens() {
  const dispatch = useDispatch();
  const giftseatList = useSelector((state) => state.giftseatList);
  console.log("called------->giftseatList",giftseatList);
  const { loading, error, giftseats } = giftseatList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listGiftseats({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>giftseat collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {giftseats.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {giftseats.map((giftseat) => (
              <Giftseat key={giftseat._id} giftseat={giftseat}></Giftseat>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

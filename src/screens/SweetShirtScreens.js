import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSweetshirts } from '../actions/SweetshirtAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sweetshirt from '../components/Sweetshirt';
// import Product from '../components/Product';




export default function SweetShirtScreens() {
  const dispatch = useDispatch();
  const sweetshirtList = useSelector((state) => state.sweetshirtList);
  console.log("called------->sweetshirtList",sweetshirtList);
  const { loading, error, sweetshirts } = sweetshirtList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listSweetshirts({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>sweetshirt collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {sweetshirts.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {sweetshirts.map((sweetshirt) => (
              <Sweetshirt key={sweetshirt._id} sweetshirt={sweetshirt}></Sweetshirt>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

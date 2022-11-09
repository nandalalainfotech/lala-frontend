import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listHeadphones } from '../actions/headphoneAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Headphone from '../components/Headphone';
// import Product from '../components/Product';




export default function HeadphoneScreens() {
  const dispatch = useDispatch();
  const headphoneList = useSelector((state) => state.headphoneList);
  console.log("called------->headphoneList",headphoneList);
  const { loading, error, headphones } = headphoneList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listHeadphones({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>headphone collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {headphones.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {headphones.map((headphone) => (
              <Headphone key={headphone._id} headphone={headphone}></Headphone>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

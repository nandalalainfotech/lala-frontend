import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTshirts } from '../actions/tshirtAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Tshirt from '../components/Tshirt';
// import Product from '../components/Product';




export default function TshirtScreens() {
  const dispatch = useDispatch();
  const tshirtList = useSelector((state) => state.tshirtList);
  console.log("called------->tshirtList",tshirtList);
  const { loading, error, tshirts } = tshirtList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listTshirts({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>Tshirt collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {tshirts.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {tshirts.map((tshirt) => (
              <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

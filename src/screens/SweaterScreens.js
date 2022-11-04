import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSweaters } from '../actions/sweaterAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sweater from '../components/Sweater';
// import Product from '../components/Product';




export default function SweaterScreens() {
  const dispatch = useDispatch();
  const sweaterList = useSelector((state) => state.sweaterList);
  console.log("called------->sweaterList",sweaterList);
  const { loading, error, sweaters } = sweaterList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listSweaters({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>Sweater collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {sweaters.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {sweaters.map((sweater) => (
              <Sweater key={sweater._id} sweater={sweater}></Sweater>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

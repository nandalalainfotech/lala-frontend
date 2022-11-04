import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listJackets } from '../actions/jacketAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Jacket from '../components/Jacket';
// import Product from '../components/Product';




export default function JacketScreens() {
  const dispatch = useDispatch();
  const jacketList = useSelector((state) => state.jacketList);
  console.log("called------->jacketList",jacketList);
  const { loading, error, jackets } = jacketList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listJackets({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>Jacket collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {jackets.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {jackets.map((jacket) => (
              <Jacket key={jacket._id} jacket={jacket}></Jacket>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

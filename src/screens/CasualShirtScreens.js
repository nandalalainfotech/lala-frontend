import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCasualshirts } from '../actions/casualshirtAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Casualshirt from '../components/Casualshirt';
// import Product from '../components/Product';




export default function CasualShirtScreens() {
  const dispatch = useDispatch();
  const casualshirtList = useSelector((state) => state.casualshirtList);
  console.log("called------->casualshirtList", casualshirtList);
  const { loading, error, casualshirts } = casualshirtList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);

  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listCasualshirts({}));

  }, [dispatch]);


  return (
    <div>



      <h2>Casual shirt collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {casualshirts.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {casualshirts.map((casualshirt) => (
              <Casualshirt key={casualshirt._id} casualshirt={casualshirt}></Casualshirt>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

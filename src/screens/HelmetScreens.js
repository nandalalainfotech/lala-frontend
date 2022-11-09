import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listHelmets } from '../actions/helmetAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Helmet from '../components/Helmet';
// import Product from '../components/Product';




export default function HelmetScreens() {
  const dispatch = useDispatch();
  const helmetList = useSelector((state) => state.helmetList);
  console.log("called------->helmetList",helmetList);
  const { loading, error, helmets } = helmetList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listHelmets({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>helmet collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {helmets.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {helmets.map((helmet) => (
              <Helmet key={helmet._id} helmet={helmet}></Helmet>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

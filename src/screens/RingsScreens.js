import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRingss } from '../actions/ringsAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rings from '../components/Rings';
// import Product from '../components/Product';




export default function RingsScreens() {
  const dispatch = useDispatch();
  const ringsList = useSelector((state) => state.ringsList);
  console.log("called------->ringsList",ringsList);
  const { loading, error, ringss } = ringsList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listRingss({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>rings collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {ringss.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {ringss.map((rings) => (
              <Rings key={rings._id} rings={rings}></Rings>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

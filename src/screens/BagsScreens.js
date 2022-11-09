import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBagss } from '../actions/bagsAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Bags from '../components/Bags';
// import Product from '../components/Product';




export default function BagsScreens() {
  const dispatch = useDispatch();
  const bagsList = useSelector((state) => state.bagsList);
  console.log("called------->bagsList",bagsList);
  const { loading, error, bagss } = bagsList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listBagss({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>bags collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {bagss.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {bagss.map((bags) => (
              <Bags key={bags._id} bags={bags}></Bags>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

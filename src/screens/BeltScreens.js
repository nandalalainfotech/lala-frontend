import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBelts } from '../actions/beltAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Belt from '../components/Belt';
// import Product from '../components/Product';




export default function BeltScreens() {
  const dispatch = useDispatch();
  const beltList = useSelector((state) => state.beltList);
  console.log("called------->beltList",beltList);
  const { loading, error, belts } = beltList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listBelts({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>belt collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {belts.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {belts.map((belt) => (
              <Belt key={belt._id} belt={belt}></Belt>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

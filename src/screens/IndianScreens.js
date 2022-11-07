import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIndians } from '../actions/indianAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Indian from '../components/Indian';
// import Product from '../components/Product';




export default function IndianScreens() {
  const dispatch = useDispatch();
  const indianList = useSelector((state) => state.indianList);
  console.log("called------->indianList",indianList);
  const { loading, error, indians } = indianList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listIndians({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>Indian collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {indians.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {indians.map((indian) => (
              <Indian key={indian._id} indian={indian}></Indian>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

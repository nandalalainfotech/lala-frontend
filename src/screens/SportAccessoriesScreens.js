import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSportaccessoriess } from '../actions/sportaccessoriesAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sportaccessories from '../components/sportaccessories';
// import Product from '../components/Product';




export default function SportAccessoriesScreens() {
  const dispatch = useDispatch();
  const sportaccessoriesList = useSelector((state) => state.sportaccessoriesList);
  console.log("called------->sportaccessoriesList",sportaccessoriesList);
  const { loading, error, sportaccessoriess } = sportaccessoriesList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listSportaccessoriess({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>sportaccessories collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {sportaccessoriess.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {sportaccessoriess.map((sportaccessories) => (
              <Sportaccessories key={sportaccessories._id} sportaccessories={sportaccessories}></Sportaccessories>
            ))}
          </div>
        </>
      )}






    </div >


  );
}

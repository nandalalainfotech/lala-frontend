import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listLuggages } from '../actions/LuggageAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Luggage from '../components/Luggage';
// import Product from '../components/Product';




export default function LuggageScreens() {
  const dispatch = useDispatch();
  const luggageList = useSelector((state) => state.luggageList);
  console.log("called------->luggageList",luggageList);
  const { loading, error, luggages } = luggageList;
  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;
  useEffect(() => {
    dispatch(listLuggages({}));
   
  }, [dispatch]);


  return (
    <div>



      <h2>luggage collection</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {luggages.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {luggages.map((luggage) => (
              <Luggage key={luggage._id} luggage={luggage}></Luggage>
            ))}
          </div>
        </>
      )}






    </div >


  );
}
